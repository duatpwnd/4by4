<template>
  <ProgressModal
    v-if="isActiveProgressModal"
    :text="step + ' in_progress...'"
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
        <FontAwesomeIcon
          icon="right-from-bracket"
          class="sign-out-button"
          @click="signOut"
        />

        <div class="row">
          <BaseButton @click="handleUploadVideo" text="Upload Video" />
        </div>
        <div class="row video-file-select-area">
          <label class="label">Video File</label>
          <BaseSelect
            @click="isExistVideo"
            name="fileName"
            :options="videoFiles"
            :text="
              selectedVideoFile == null
                ? '<span class=not-selected>Please Upload Video Files</span>'
                : selectedVideoFile.fileName
            "
          >
            <template #list>
              <li
                class="optionItem"
                v-for="(files, index) in videoFiles"
                :key="index"
              >
                <span class="date">{{ files.date }}</span>
                <div
                  v-for="(video, index) in files.video"
                  class="file-name-area"
                  @click="clickVideo(video, index)"
                >
                  <span class="file-name" ref="fileName">{{
                    video.fileName
                  }}</span>
                  <span class="file-status-area">
                    <span class="file-status" v-if="video.isInference"
                      >완료</span
                    >
                    <span class="file-size">{{ video.fileSize }}</span>
                    <FontAwesomeIcon
                      icon="xmark"
                      class="delete-button"
                      @click.stop="deleteVideo(video.videoId)"
                    />
                  </span>
                </div>
              </li>
            </template>
          </BaseSelect>
        </div>
      </section>
      <section class="setting-area">
        <h2 class="h2-title">Output Settings</h2>
        <div class="row">
          <label class="label">AI Model</label>
          <BaseSelect
            @update:select-box="
                (obj: SelectedAiType) => {
                  selectedAiModel = obj
                }
            "
            :options="aiModelOptions"
            name="projectName,containerName"
            :text="
              selectedAiModel == null
                ? '<span class=not-selected>Select AI Model</span>'
                : selectedAiModel.projectName +
                  '/' +
                  selectedAiModel.containerName
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
            @update:select-box="(obj:SelectedEncoderType) => {
              if(obj.message){
                emitter.emit('update:alert', {
                  isActive: true,
                  message: obj.message,
                });          
              }
              (selectedEncoder = obj)
            }"
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
          <!-- <div>
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
          </div> -->
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
          <label class="bitrate">Bitrate : </label>
          <BaseInput
            @update:modelValue="(newValue:string) => (bitrate = newValue)"
            placeholder=""
            type="text"
            :onlyText="true"
            :modelValue="quality.indexOf('best quality') >= 0 ? 1000 : bitrate"
            :class="quality.indexOf('best quality') < 0 ? 'active' : 'inActive'"
            :isDisabled="quality.indexOf('best quality') < 0 ? false : true"
          />
          <span class="unit">(kbps)</span>
        </div>
        <div class="row">
          <BaseButton
            text="Preview"
            :class="
              selectedVideoFile == null ||
              selectedAiModel == null ||
              (selectedFormat.name == 'mp4' &&
                selectedEncoder.value == 'ProRes')
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
      :originalVideoSrc="originalVideoSrc"
      :inferredVideoSrc="inferredVideoSrc"
      :key="updateVideoKey"
    />
  </main>
</template>
<script setup lang="ts">
  import ProgressModal from "@/components/modal/upload/ProgressModal.vue";
  import Video from "@components/video/Video.vue";
  import UploadModal from "@components/modal/upload/UploadModal.vue";
  import { EventType, Emitter } from "mitt";
  import { AxiosInstance } from "axios";
  import { ref, inject, onMounted, onBeforeUnmount, computed } from "vue";
  import serviceAPI from "@api/services";
  import { useUserStore } from "@/store/user";
  import { EventSourcePolyfill } from "event-source-polyfill";
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
  interface SelectedVideo {
    videoId: string;
    fileName: string;
    fileSize: string;
    isInference: boolean;
  }
  interface VideoListType {
    date: string;
    video: SelectedVideo[];
  }

  interface SelectedAiType {
    projectName: string;
    modelName: string;
    containerName: string;
    containerId: string;
  }
  interface SelectedType {
    name: string;
  }
  interface SelectedEncoderType extends SelectedType {
    value: string;
    disabled?: boolean;
    message?: string;
  }

  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isLoading?: boolean;
        isActive?: boolean;
        message?: string;
        fn?: () => void;
      }
    >
  >;
  const currentVideoIndex = ref(-1);
  const signOut = inject("signOut");
  const userStore = useUserStore();
  const updateKey = ref(0); // 업로드 중 취소할때 갱신을 위한 키값
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const videoFiles = ref<VideoListType[]>([]); // 비디오 파일 리스트
  const selectedVideoFile = ref<SelectedVideo | null>(null); // 선택된 비디오 파일
  const aiModelOptions = ref<SelectedAiType[]>([]); // aiModel 리스트
  const selectedAiModel = ref<SelectedAiType | null>(null); // 선택된 aiModel
  const formatOptions = [{ name: "mp4" }, { name: "mov" }, { name: "mkv" }]; // format 리스트
  const selectedFormat = ref<SelectedType>({ name: "mp4" }); // 선택된 format
  const selectedEncoder = ref<SelectedEncoderType>({
    name: "H.264",
    value: "H.264",
  }); // 선택된 encoder
  const quality = ref<string[]>([]);
  const vbrOrCbr = ref("VBR");
  const isActiveUploadModal = ref(false);
  const isActiveProgressModal = ref(false);
  const bitrate = ref("1000");
  const progressValue = ref(0);
  const isUploaded = ref(false); // 업로드 여부
  const isInferred = ref(false); // 추론 여부
  const originalVideoSrc = ref(""); // 원본 영상
  const inferredVideoSrc = ref(""); // 추론 영상
  const uuid = ref(""); // sse uuid
  const step = ref(""); // 추론 진행상태
  const updateVideoKey = ref(0);
  const handleUploadVideo = () => {
    isActiveUploadModal.value = true;
    selectedVideoFile.value = null;
    isInferred.value = false;
    isUploaded.value = false;
    originalVideoSrc.value = "";
    inferredVideoSrc.value = "";
  };
  const clickVideo = (video: SelectedVideo, index: number) => {
    currentVideoIndex.value = index;
    updateVideoKey.value += 1;
    isUploaded.value = true;
    selectedVideoFile.value = video;
    isActiveUploadModal.value = false;
    upload;
    if (video.isInference) {
      defaultInstance
        .get(serviceAPI.videoAlready + `?videoId=${video.videoId}`)
        .then((result) => {
          console.log(result);
          isInferred.value = true;
          originalVideoSrc.value = result.data.data.originalVideo;
          inferredVideoSrc.value = result.data.data.inferenceVideo;
        });
    } else {
      isInferred.value = false;
      originalVideoSrc.value = "";
      inferredVideoSrc.value = "";
    }
  };
  const encoderOptions = computed<SelectedEncoderType[]>(() => {
    const arr: SelectedEncoderType[] = [
      { name: "H.264", value: "H.264" },
      {
        name: "H.265",
        value: "H.265",
        message:
          "Unsupport H265 codec in Web browser, Please download H265 video",
      },
      { name: "ProRes(Unable to play video)", value: "ProRes", disabled: true },
    ];
    if (
      selectedFormat.value.name == "mkv" ||
      selectedFormat.value.name == "mov"
    ) {
      arr[2].message = "Unable to play video, download only ALERT";
    } else {
      arr[2].message =
        "Unable to encode prores in mp4, please select other encoder";
    }
    return arr;
  });
  const fileName = ref<HTMLSpanElement[] | null>(null);
  let sseEvents: EventSource;
  // 비디오 존재 여부에 따른 안내 문구
  const isExistVideo = (event: Event) => {
    if (videoFiles.value.length == 0) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "Please upload your video files.",
      });
      event.stopPropagation();
    }
  };
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
    // upload 후 제일 마지막 파일 선택
    const findLastIndex = list.videoList[
      list.videoList.length - 1
    ].video.findLastIndex((el) => {
      return el.isInference == false;
    });
    isUploaded.value = true;
    selectedVideoFile.value =
      list.videoList[list.videoList.length - 1].video[findLastIndex];
  };
  const deleteVideo = (videoId: string) => {
    emitter.emit("update:alert", {
      isActive: true,
      message: "삭제하시겠습니까?",
      fn: () => {
        emitter.emit("update:loading", { isLoading: true });
        defaultInstance
          .delete(serviceAPI.video + `?videoId=${videoId}`)
          .then((result) => {
            originalVideoSrc.value = "";
            inferredVideoSrc.value = "";
            isUploaded.value = false;
            isInferred.value = false;
            selectedVideoFile.value = null; // 선택 파일 초기화
            currentVideoIndex.value = -1; // active 된 비디오 초기화
            emitter.emit("update:loading", { isLoading: false });
            getVideoList();
          });
      },
    });
  };
  // 비디오 및 ai model 불러오는 함수
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
  // 베스트 퀄리티 유효성 체크
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
    if (
      selectedFormat.value.name == "mp4" &&
      selectedEncoder.value.value == "ProRes"
    ) {
      return false;
    } else if (selectedVideoFile.value == null) {
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
      isActiveUploadModal.value = false;
      isInferred.value = false;
      originalVideoSrc.value = "";
      inferredVideoSrc.value = "";
      emitter.emit("update:loading", { isLoading: true });
      defaultInstance
        .post(serviceAPI.videoInference, {
          videoId: selectedVideoFile.value && selectedVideoFile.value.videoId,
          containerId: selectedAiModel.value.containerId,
          format: selectedFormat.value.name,
          encoder: selectedEncoder.value.value,
          bestQuality: quality.value.indexOf("best quality") >= 0 ? 1 : 0,
          twoPassEncoding:
            quality.value.indexOf("best quality") >= 0
              ? 0
              : quality.value.indexOf("2-Pass Encoding") >= 0
              ? 1
              : 0,
          avgBitrate:
            quality.value.indexOf("best quality") >= 0 ? "1000" : bitrate.value,
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
          sessionStorage.setItem(
            "inference",
            JSON.stringify({
              uuid: result.data.data,
              containerId: selectedAiModel.value!.containerId,
            })
          );
          updateVideoKey.value += 1;
          uuid.value = result.data.data;
          connectSSE(result.data.data);
        });
    }
  };
  const reset = () => {
    sseEvents.close();
    isActiveProgressModal.value = false;
    isInferred.value = false;
    pauseInference({
      containerId: selectedAiModel.value!.containerId,
      uuid: uuid.value,
    });
  };

  const close = () => {
    emitter.emit("update:alert", {
      isActive: true,
      message: "취소하시겠습니까?",
      fn: () => {
        reset();
      },
    });
  };
  // sse 연결
  const connectSSE = (uuid: string) => {
    sseEvents = new EventSourcePolyfill(
      import.meta.env.VITE_BASE_URL + serviceAPI.connectSSE + `?uuid=${uuid}`,
      {
        headers: {
          Authorization: userStore.user!.token,
        },
      }
    );
    sseEvents.onopen = () => {
      emitter.emit("update:loading", { isLoading: false }); // 로딩 끄기
    };
    sseEvents.onmessage = (stream) => {
      try {
        if (typeof JSON.parse(stream.data) == "object") {
          const data = JSON.parse(stream.data);
          console.log(data);
          step.value = data.step;
          progressValue.value = data.progress; // 프로그레스 값 할당
          isActiveProgressModal.value = true; // 프로그레스 돌리기
          if (data.status == "error") {
            reset();
          }
          // 완료
          if (
            data.step == "all" &&
            data.progress == 100 &&
            data.result == "true"
          ) {
            sseEvents.close(); // sse 연결 끊기
            isActiveProgressModal.value = false; // 프로그레스 모달 닫기
            sessionStorage.removeItem("inference"); // 로컬 삭제
            emitter.emit("update:loading", { isLoading: true }); // 비디오 다운로드 하기전까지 로딩바 돌리기
            originalVideoSrc.value = data.originalVideo; // 원본 src
            inferredVideoSrc.value = data.inferenceVideo; // 추론 src
            isInferred.value = true; // 녹색으로 테두리 변경 신호
            getVideoList();
            emitter.emit("update:loading", { isLoading: false });
          }
        }
      } catch (error) {}
    };
    sseEvents.onerror = (err) => {
      sseEvents.close();
    };
  };
  // 새로고침 물어보기
  const reloadEvent = (event: Event) => {
    if (isActiveProgressModal.value) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return "";
    }
  };
  // 추론 중지
  const pauseInference = (obj: { uuid: string; containerId: string }) => {
    emitter.emit("update:alert", {
      isActive: true,
      message:
        "추론 정지중입니다. 잠시만 기다려주세요.&nbsp;&nbsp;<div class='loader'></div>",
    });
    defaultInstance
      .delete(
        serviceAPI.videoInference +
          `?containerId=${obj.containerId}&uuid=${obj.uuid}`
      )
      .then((result) => {
        getVideoList();
        emitter.emit("update:loading", { isLoading: false });
        emitter.emit("update:alert", {
          isActive: true,
          message: "추론 정지가 완료되었습니다.",
        });
        setTimeout(() => {
          emitter.emit("update:alert", {
            isActive: false,
          });
        }, 2000);
        sessionStorage.removeItem("inference");
      });
  };
  // 새로고침 감지 :: S
  onBeforeUnmount(() => {
    window.removeEventListener("beforeunload", reloadEvent);
  });
  onMounted(() => {
    window.addEventListener("beforeunload", reloadEvent);
    getVideoList(); // 비디오, ai model 불러오기
    if (sessionStorage.getItem("inference") != null) {
      pauseInference(JSON.parse(sessionStorage.getItem("inference") as string));
    }
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
    .video-file-select-area {
      :deep(.select-box) {
        .optionList {
          .optionItem {
            padding: 0;
            &:hover {
              background-color: transparent;
            }
            .date {
              line-height: 23px;
              padding: 0px 10px;
              display: block;
              background-color: #686de0;
              color: white;
              margin-bottom: 0;
            }
            .file-name-area {
              padding: 14px 10px;
              display: flex;
              justify-content: space-between;
              &.active {
                background-color: #b3b6f6;
              }
              &:hover {
                background-color: #ccc;
              }

              .file-name {
                width: 50%;
                @include ellipsis(1);
                align-self: center;
              }
              .file-status-area {
                display: flex;
                width: 50%;
                justify-content: right;
                column-gap: 2px;
                .file-status {
                  align-self: center;
                }
                .file-size {
                  align-self: center;
                }
                .delete-button {
                  color: red;
                  cursor: pointer;
                  font-size: 20px;
                  align-self: center;
                }
              }
            }
          }
        }
      }
    }
    :deep(.select-box) {
      @include background("arrow_bottom_ico.svg", 10px, 5px, center right 20px);
      .not-selected {
        color: #b3b3b3;
      }
      .date {
        margin-bottom: 6px;
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
      .h2-title {
        display: inline-block;
      }
      .sign-out-button {
        color: #ff4343;
        z-index: 1;
        height: 24px;
        cursor: pointer;
        float: right;
      }
      .setting-area {
        margin-top: 30px;
      }
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
          margin: 0 6px;
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
