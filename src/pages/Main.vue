<template>
  <ProgressModal
    v-if="isActiveProgressModal"
    text="Inference is in progress..."
    :progressValue="progressValue"
    @update:close-progress-modal="close"
  />
  <main>
    <Teleport to="#teleport-upload-modal" v-if="isActiveUploadModal">
      <UploadModal
        :key="updateKey"
        @update:close="isActiveUploadModal = false"
        @update:upload="(list) => upload(list)"
        @update:abort="updateKey += 1"
      />
    </Teleport>
    <aside>
      <section class="upload-area">
        <h2 class="h2-title">PIXELL AI</h2>
        <div class="row">
          <BaseButton @click="isActiveUploadModal = true" text="Upload Video" />
        </div>
        <div class="row">
          <label class="label">video File</label>
          <BaseSelect
            @update:select-box="(video:VideoListType)=>{
              isUploaded = true;
              selectedVideoFile = video}"
            name="fileName"
            :options="videoFiles"
            :text="
              selectedVideoFile == null
                ? '<span class=not-selected>Please Upload Video Files</span>'
                : selectedVideoFile.fileName
            "
          />
        </div>
      </section>
      <section class="setting-area">
        <h2 class="h2-title">Output Setting</h2>
        <div class="row">
          <label class="label">AI Model</label>
          <BaseSelect
            @update:select-box="
                (obj: SelectedAiType) => {
                  selectedAiModel = obj
                }
            "
            :options="aiModelOptions"
            name="projectName,modelName"
            :text="
              selectedAiModel == null
                ? '<span class=not-selected>Select AI Model</span>'
                : selectedAiModel.projectName + '/' + selectedAiModel.modelName
            "
          />
        </div>
        <div class="row">
          <label class="label">Format</label>
          <BaseSelect
            @update:select-box="(obj:SelectedType) => (selectedFormat = obj)"
            :options="formatOptions"
            name="name"
            :text="selectedFormat.name"
          />
        </div>
        <div class="row">
          <label class="label">Encoder</label>
          <BaseSelect
            @update:select-box="(obj:SelectedType) => (selectedEncoder = obj)"
            :options="encoderOptions"
            name="name"
            :text="selectedEncoder.name"
          />
        </div>
        <div class="row check-area">
          <div>
            <BaseCheckBox
              @update:checkModelValue="onCheck"
              id="BestQuality"
              value="best quality"
            />
            <label for="BestQuality">Best Quality</label>
          </div>
          <div>
            <span
              class="check-box"
              :class="
                quality.indexOf('best quality') < 0 ? 'active' : 'inActive'
              "
            >
              <BaseCheckBox
                @update:checkModelValue="onCheck"
                :id="quality.indexOf('best quality') < 0 ? '2PassEncoding' : ''"
                value="2-Pass Encoding"
              />
            </span>
            <label
              for="2PassEncoding"
              :class="
                quality.indexOf('best quality') < 0 ? 'active' : 'inActive'
              "
              >2-Pass Encoding</label
            >
          </div>
        </div>
        <div class="row check-area">
          <div>
            <BaseRadio
              class="radio"
              @update:modelValue="(newValue:string) => (vbrOrCbr = newValue)"
              name="vbrOrCbr"
              value="VBR"
              :class="
                quality.indexOf('best quality') < 0 ? 'active' : 'inActive'
              "
              :isDisabled="quality.indexOf('best quality') < 0 ? false : true"
              v-model="vbrOrCbr"
            />
            <label
              for="VBR"
              :class="
                quality.indexOf('best quality') < 0 ? 'active' : 'inActive'
              "
              >VBR</label
            >
          </div>
          <div>
            <BaseRadio
              class="radio"
              @update:modelValue="(newValue:string) => (vbrOrCbr = newValue)"
              name="vbrOrCbr"
              value="CBR"
              :class="
                quality.indexOf('best quality') < 0 ? 'active' : 'inActive'
              "
              :isDisabled="quality.indexOf('best quality') < 0 ? false : true"
              v-model="vbrOrCbr"
            />
            <label
              for="CBR"
              :class="
                quality.indexOf('best quality') < 0 ? 'active' : 'inActive'
              "
              >CBR</label
            >
          </div>
        </div>
        <div class="row">
          <label class="bitrate">AVg.Bitrate : </label>
          <BaseInput
            @update:modelValue="(newValue:string) => (bitrate = newValue)"
            placeholder=""
            type="text"
            :onlyText="true"
            :modelValue="quality.indexOf('best quality') >= 0 ? 0 : bitrate"
            :class="quality.indexOf('best quality') < 0 ? 'active' : 'inActive'"
            :isDisabled="quality.indexOf('best quality') < 0 ? false : true"
          />
          <span class="unit">(kbps)</span>
        </div>
        <div class="row">
          <BaseButton
            text="Preview"
            :class="
              selectedVideoFile == null || selectedAiModel == null
                ? 'inActive'
                : 'active'
            "
            @click="preview"
          />
        </div>
      </section>
    </aside>
    <Video
      :isUploaded="isUploaded"
      :isInferred="isInferred"
      :originalVideoSrc="''"
      :inferredVideoSrc="''"
    />
  </main>
</template>
<script setup lang="ts">
  import ProgressModal from "@/components/modal/upload/ProgressModal.vue";
  import Video from "@components/video/Video.vue";
  import UploadModal from "@components/modal/upload/UploadModal.vue";
  import { EventType, Emitter } from "mitt";
  import { AxiosInstance } from "axios";
  import { ref, inject, onMounted, onBeforeUnmount } from "vue";
  import serviceAPI from "@api/services";
  import { useRoute } from "vue-router";
  interface StreamType {
    data: {
      progress: number;
      container_id: string;
      task_uuid: string;
      result: boolean;
      status: string;
      step: string;
    };
  }
  interface VideoListType {
    videoId: string;
    fileName: string;
  }
  interface SelectedAiType {
    projectName: string;
    modelName: string;
    containerId: string;
  }
  interface SelectedType {
    name: string;
  }

  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive?: boolean; message?: string; fn?: () => void }>
  >;
  const updateKey = ref(0);
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const videoFiles = ref<VideoListType[]>([]); // 비디오 파일 리스트
  const selectedVideoFile = ref<VideoListType | null>(null); // 선택된 비디오 파일
  const aiModelOptions = ref<SelectedAiType[]>([]); // aiModel 리스트
  const selectedAiModel = ref<SelectedAiType | null>(null); // 선택된 aiModel
  const formatOptions = [{ name: "mp4" }, { name: "mov" }, { name: "mkv" }]; // format 리스트
  const selectedFormat = ref<SelectedType>({ name: "mp4" }); // 선택된 format
  const encoderOptions = [
    { name: "H.264" },
    { name: "H.265" },
    { name: "ProRes" },
  ]; // encoder 리스트
  const selectedEncoder = ref<SelectedType>({ name: "H.264" }); // 선택된 encoder
  const quality = ref<string[]>([]);
  const vbrOrCbr = ref("VBR");
  const isActiveUploadModal = ref(false);
  const isActiveProgressModal = ref(false);
  const bitrate = ref("128");
  const progressValue = ref(0);
  const isUploaded = ref(false); // 업로드 여부
  const isInferred = ref(false); // 추론 여부
  const route = useRoute();
  let sseEvents: EventSource;
  // upload 처리 함수
  const upload = (list: {
    videoList: VideoListType[];
    inferenceModelList: SelectedAiType[];
  }) => {
    selectedVideoFile.value = null;
    aiModelOptions.value = [];
    videoFiles.value = [];
    aiModelOptions.value = list.inferenceModelList;
    videoFiles.value = list.videoList;
  };
  const getVideoList = () => {
    Promise.all([
      defaultInstance.get(serviceAPI.videoList),
      defaultInstance.get(serviceAPI.inferenceModelList),
    ]).then((result) => {
      videoFiles.value = result[0].data;
      aiModelOptions.value = result[1].data.data.filter(
        (el: string | null) => el !== null
      );
    });
  };
  const onCheck = (value: string) => {
    const getIndex = quality.value.indexOf(value);
    if (getIndex >= 0) {
      quality.value.splice(getIndex, 1);
    } else {
      if (value == "best quality") {
        quality.value = [];
        quality.value.push("best quality");
      } else {
        quality.value.push(value);
      }
    }
  };
  // 추론함수
  const preview = () => {
    if (selectedVideoFile.value == null) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "Please select a video file.",
      });
    } else if (selectedAiModel.value == null) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "Please select ai model.",
      });
    } else {
      defaultInstance
        .post(serviceAPI.videoInference, {
          videoId: selectedVideoFile.value && selectedVideoFile.value.videoId,
          containerId: selectedAiModel.value.containerId,
          format: selectedFormat.value.name,
          encoder: selectedEncoder.value.name,
          bestQuality: quality.value.indexOf("best quality") >= 0 ? 1 : 0,
          twoPassEncoding:
            quality.value.indexOf("best quality") >= 0
              ? 0
              : quality.value.indexOf("2-Pass Encoding") >= 0
              ? 1
              : 0,
          avgBitrate:
            quality.value.indexOf("best quality") >= 0 ? 0 : bitrate.value,
          vbr:
            quality.value.indexOf("best quality") >= 0
              ? false
              : vbrOrCbr.value == "VBR"
              ? true
              : false,
          cbr:
            quality.value.indexOf("best quality") >= 0
              ? false
              : vbrOrCbr.value == "CBR"
              ? true
              : false,
        })
        .then((result) => {
          console.log(result);
          connectSSE(result.data);
        });
    }
  };
  const close = () => {
    emitter.emit("update:alert", {
      isActive: true,
      message: "취소하시겠습니까?",
      fn: () => {
        sseEvents.close();
        isActiveProgressModal.value = false;
        isInferred.value = false;
        console.log(serviceAPI.connectSSE + "----closed");
      },
    });
  };
  // sse 연결
  const connectSSE = (uuid: string) => {
    sseEvents = new EventSource(serviceAPI.connectSSE + `?uuid=${uuid}`);
    sseEvents.onopen = () => {
      isActiveProgressModal.value = true;
      console.log(serviceAPI.connectSSE + `?uuid=${uuid}` + "----connect");
    };
    sseEvents.onmessage = (stream: StreamType) => {
      console.log(stream);
      progressValue.value = stream.data.progress;
      if (stream.data.progress == 100) {
        sseEvents.close();
        isInferred.value = true;
        isActiveProgressModal.value = false;
        defaultInstance
          .get(serviceAPI.videoDownload + `?path=$`)
          .then((result) => {
            console.log("video download", result);
          });
      }
    };
    sseEvents.onerror = (err) => {
      console.log(err);
    };
  };
  const reloadEvent = (event: Event) => {
    if (isActiveUploadModal.value) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return "";
    }
  };
  // 새로고침 감지 :: S
  onBeforeUnmount(() => {
    window.removeEventListener("beforeunload", reloadEvent);
  });
  onMounted(() => {
    window.addEventListener("beforeunload", reloadEvent);
    getVideoList();
  });
  // 새로고침 감지 :: E
</script>
<style scoped lang="scss">
  main {
    height: 100%;
    .select-box:has(.not-selected) {
      @include background(
        "arrow_bottom_non_active_ico.svg",
        10px,
        5px,
        center right 20px
      );
    }
    :deep(.select-box) {
      @include background("arrow_bottom_ico.svg", 10px, 5px, center right 20px);
      .not-selected {
        color: #b3b3b3;
      }
      .label {
        width: calc(100% - 10px);
      }
    }
    aside {
      display: inline-flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px;
      box-sizing: border-box;
      vertical-align: top;
      width: 320px;
      height: 100%;
      overflow: auto;
      .row {
        margin-top: 20px;
        &.check-area {
          display: flex;
          div {
            width: 50%;
            .check-box {
              height: 24px;
              &.inActive {
                display: inline-block;
                opacity: 0.3;
                background-color: #ccc;
              }
            }
            :deep(.radio) {
              &.inActive {
                background-color: #ccc;
                border: 0.4em solid #dfdfdf;

                &:checked {
                  border: 0.4em solid #dfdfdf;
                }
              }
            }
          }
          label {
            vertical-align: middle;
            white-space: nowrap;
            font-size: 14px;
            vertical-align: 6px;
            margin-left: 8px;
            color: #616161;
            &.inActive {
              color: #ccc;
            }
          }
        }
        .label {
          margin-bottom: 5px;
          display: block;
        }
        .bitrate {
          display: inline-block;
        }
        .base-input {
          font-size: 16px;
          border: 1px solid #ccc;
          padding: 10px;
          text-align: center;
          background-color: white;
          width: 100px;
          margin-left: 7px;
          margin-right: 2px;
          &.inActive {
            color: #ccc;
          }
        }
        .base-button {
          &.inActive {
            background-color: #9699e7;
          }
        }
      }
    }
  }
</style>
