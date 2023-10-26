<template>
  <ProgressModal
    v-if="isActiveProgressModal"
    text="Inferencing is in progress..."
    :progressValue="progressValue"
    @update:close-progress-modal="isActiveProgressModal = false"
  />
  <main>
    <Teleport to="#teleport-upload-modal" v-if="isActiveUploadModal">
      <UploadModal
        @update:close="isActiveUploadModal = false"
        @update:upload="
          (files) => {
            selectedVideoFile = null;
            videoFiles = [...files];
          }
        "
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
            @update:select-box="(file:File)=>selectedVideoFile = file"
            name="name"
            :options="videoFiles"
            :text="
              selectedVideoFile == null
                ? '<span class=not-selected>Please Upload Video Files</span>'
                : selectedVideoFile.name
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
              {
                (obj: SelectedType) => (selectedAiModel = obj);
              }
            "
            :options="aiModelOptions"
            name="name"
            :text="selectedAiModel.name"
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
            <BaseCheckBox
              @update:checkModelValue="onCheck"
              id="2PassEncoding"
              value="2-Pass Encoding"
            />
            <label for="2PassEncoding">2-Pass Encoding</label>
          </div>
        </div>
        <div class="row check-area">
          <div>
            <BaseRadio
              @update:modelValue="(newValue:string) => (vbrOrCbr = newValue)"
              name="vbrOrCbr"
              value="VBR"
              v-model="vbrOrCbr"
            />
            <label for="VBR">VBR</label>
          </div>
          <div>
            <BaseRadio
              @update:modelValue="(newValue:string) => (vbrOrCbr = newValue)"
              name="vbrOrCbr"
              value="CBR"
              v-model="vbrOrCbr"
            />
            <label for="CBR">CBR</label>
          </div>
        </div>
        <div class="row">
          <label class="bitrate">AVg.Bitrate : </label>
          <BaseInput
            @update:modelValue="(newValue:string) => (bitrate = newValue)"
            placeholder=""
            type="text"
            :onlyText="true"
            :modelValue="bitrate"
          />
          <span class="unit">(kbps)</span>
        </div>
        <div class="row">
          <BaseButton
            text="Preview"
            :class="selectedVideoFile == null ? 'inActive' : 'active'"
            @click="preview"
          />
        </div>
      </section>
    </aside>
    <Video />
  </main>
</template>
<script setup lang="ts">
  import ProgressModal from "@/components/modal/upload/ProgressModal.vue";
  import Video from "@components/video/Video.vue";
  import UploadModal from "@components/modal/upload/UploadModal.vue";
  import { AxiosInstance } from "axios";
  import { ref, inject, onMounted } from "vue";
  import serviceAPI from "@api/services";

  interface SelectedType {
    name: string;
  }
  const authInstance = inject("authInstance") as AxiosInstance;
  const videoFiles = ref<any[]>([]); // 비디오 파일 리스트
  const selectedVideoFile = ref<File | null>(null); // 선택된 비디오 파일
  const aiModelOptions = ref([{ name: "DeNoising" }]); // aiModel 리스트
  const selectedAiModel = ref<SelectedType>({ name: "DeNoising" }); // 선택된 aiModel
  const formatOptions = ref([{ name: "MP4" }]); // format 리스트
  const selectedFormat = ref<SelectedType>({ name: "MP4" }); // 선택된 format
  const encoderOptions = ref([{ name: "H.264" }]); // encoder 리스트
  const selectedEncoder = ref<SelectedType>({ name: "H.264" }); // 선택된 encoder
  const quality = ref<string[]>([]);
  const vbrOrCbr = ref("VBR");
  const isActiveUploadModal = ref(false);
  const isActiveProgressModal = ref(false);
  const bitrate = ref("128");
  const progressValue = ref(0);
  const onCheck = (value: string) => {
    const getIndex = quality.value.indexOf(value);
    if (getIndex >= 0) {
      quality.value.splice(getIndex, 1);
    } else {
      quality.value.push(value);
    }
  };
  const preview = () => {
    if (selectedVideoFile == null) {
    } else {
      isActiveProgressModal.value = true;
      authInstance
        .post(
          serviceAPI.videoInference,
          {
            videoId: "",
            containerId: "string",
            format: selectedFormat.value,
            encoder: selectedEncoder.value,
            bestQuality: 0,
            twoPassEncoding: 0,
            avgBitrate: 0,
            variableBitrate: bitrate.value,
          },
          {
            onUploadProgress: (progressEvent) => {
              const percentage =
                (progressEvent.loaded * 100) / (progressEvent.total as number);
              progressValue.value = percentage;
            },
          }
        )
        .then((result) => {
          console.log(result);
        });
    }
  };
  onMounted(() => {
    // setInterval(() => {
    //   if (progressValue.value == 100) {
    //     return;
    //   } else {
    //     progressValue.value += 1;
    //   }
    // }, 50);
  });
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
          }
          label {
            vertical-align: middle;
            white-space: nowrap;
            font-size: 14px;
            vertical-align: 6px;
            margin-left: 8px;
            color: #616161;
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
          border: 1px solid #ccc;
          padding: 6px;
          text-align: center;
          background-color: white;
          width: 100px;
          margin-left: 7px;
          margin-right: 2px;
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
