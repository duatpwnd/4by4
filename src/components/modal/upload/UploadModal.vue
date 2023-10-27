<template>
  <ProgressModal
    v-if="isActiveProgressModal"
    text="tar file uploading..."
    :progressValue="progressValue"
    @update:close-progress-modal=""
  />

  <div class="upload-modal-container">
    <button class="close-btn" @click="close"></button>
    <div class="contents">
      <div
        class="file-upload-area"
        :class="isDragged ? 'dragged' : ''"
        @dragenter="onDragenter"
        @dragover="onDragover"
        @dragleave="onDragleave"
        @drop="onDrop"
      >
        <strong>
          Drop Video File here to upload or
          <label class="file-upload-txt" for="file-upload">Choose File</label>
          <input
            type="file"
            id="file-upload"
            accept=".mp4, .mov, .mkv"
            @change="fileUpload"
            multiple
          />
        </strong>
      </div>
      <p class="guide-msg">
        Your Video Files are safely stored and secured using encryption
      </p>
      <div class="sample-video-area">
        <h3 class="h3-title">Try Sample Video</h3>
        <ul class="sample-video-list">
          <li v-for="(video, index) in sampleVideos" :key="index">
            <img
              @click="handleClickVideo(index)"
              src="@images/sample_video_img.png"
              :class="index == selectedSampleVideo ? 'selected' : ''"
            />
          </li>
        </ul>
      </div>
      <ul class="file-name-area" v-if="files != null">
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }}
        </li>
      </ul>
      <ul class="file-name-area" v-if="selectedSampleVideo != -1">
        <li>
          {{ sampleVideos[selectedSampleVideo].name }}
        </li>
      </ul>
      <div class="upload-btn-area">
        <BaseButton text="Upload" @click="submit" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { AxiosInstance } from "axios";
  import * as tus from "tus-js-client";
  import { onMounted, ref, inject } from "vue";
  import serviceAPI from "@api/services";
  import { EventType, Emitter } from "mitt";
  import ProgressModal from "@/components/modal/upload/ProgressModal.vue";
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      { isLoading?: boolean; isActive?: boolean; message?: string }
    >
  >;
  const sampleVideos = ref([
    {
      name: "tes1.mp4",
    },
    {
      name: "tes2.mp4",
    },
    {
      name: "tes3.mp4",
    },
  ]);
  const isActiveProgressModal = ref(false);
  const progressValue = ref(0);
  const selectedSampleVideo = ref(-1);
  const emit = defineEmits(["update:close", "update:upload"]);
  const files = ref<FileList | null>(null);
  const videoUrl = ref("");
  const isDragged = ref(false);
  const handleClickVideo = (index: number) => {
    if (files.value && files.value.length > 0) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "이미 업로드된 파일이 존재합니다.",
      });
    } else {
      selectedSampleVideo.value = index;
    }
  };
  const close = () => {
    emit("update:close");
  };
  const onDragenter = () => {
    isDragged.value = true;
  };
  const onDragleave = () => {
    isDragged.value = false;
  };
  const onDragover = (event: Event) => {
    isDragged.value = true;

    event.preventDefault();
  };
  const onDrop = (event: DragEvent) => {
    if (selectedSampleVideo.value !== -1) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "이미 샘플비디오를 선택하셨습니다.",
      });
    } else {
      event.preventDefault();
      const allowedExtensions = /(\.mov|\.mp4|\.mkv)$/i;
      isDragged.value = false;
      const target = event.dataTransfer;
      if (target && target.files) {
        for (const file of target.files) {
          if (!allowedExtensions.exec(file.name)) {
            emitter.emit("update:alert", {
              isActive: true,
              message: "mp4,mov,mkv 확장자만 지원합니다.",
            });
          } else {
            files.value = target.files;
          }
        }
      }
    }
  };
  const fileUpload = (event: Event) => {
    if (selectedSampleVideo.value !== -1) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "이미 샘플비디오를 선택하셨습니다.",
      });
    } else {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        files.value = target.files;
      }
    }
  };
  const getVideoAndModelList = () => {
    Promise.all([
      defaultInstance.get(serviceAPI.videoList),
      defaultInstance.get(serviceAPI.inferenceModelList),
    ]).then((result) => {
      emit("update:upload", {
        videoList: result[0].data,
        inferenceModelList: result[1].data,
      });
      close();
    });
  };
  const submit = () => {
    if (files.value !== null) {
      isActiveProgressModal.value = true;
      const file = files.value;
      console.log(file);
      const form = new FormData();
      for (let i = 0; i < file.length; i++) {
        form.append("file", file[i]);
      }
      defaultInstance
        .postForm(serviceAPI.upload, form, {
          onUploadProgress: (progressEvent) => {
            const percentage =
              (progressEvent.loaded * 100) / (progressEvent.total as number);
            progressValue.value = Number(percentage.toFixed(0));
            console.log(percentage);
            if (percentage == 100) {
              isActiveProgressModal.value = false;
              emitter.emit("update:alert", {
                isActive: true,
                message: "잠시만 기다려 주세요!",
              });
            }
          },
          headers: {
            "Content-Type": "multipart/form-data",
            type: "video",
          },
        })
        .then((result) => {
          console.log(`output-> result`, result);
          getVideoAndModelList();
          emitter.emit("update:alert", {
            isActive: false,
          });
        });
    } else {
      emitter.emit("update:alert", {
        isActive: true,
        message: "파일 업로드 또는 샘플 비디오를 선택해주세요.",
      });
    }
  };
</script>
<style scoped lang="scss">
  .upload-modal-container {
    border: 1px solid black;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: white;
    z-index: 1;

    .close-btn {
      @include background("close_ico.svg", 25px, 25px, center);
      width: 25px;
      height: 25px;
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .contents {
      position: absolute;
      bottom: 0;
      width: 80%;
      bottom: 40px;
      left: 0;
      right: 0;
      margin: auto;
      .file-upload-area {
        text-align: center;
        border-bottom: 3px solid #a9a8a8;
        padding-bottom: 44px;
        &.dragged {
          border-bottom: 3px solid #1400ff;
        }
        strong {
          font: {
            size: 30px;
            weight: 700;
          }
          .file-upload-txt {
            color: #1400ff;
            cursor: pointer;
          }
        }
      }
      .guide-msg {
        margin-top: 65px;
        margin-bottom: 58px;
        text-align: center;
        font: {
          size: 20px;
        }
        &::before {
          vertical-align: middle;
          content: url("@images/safety_ico.svg");
          width: 44px;
          height: 44px;
          margin-right: 10px;
        }
      }
      .file-name-area {
        border: 1px solid #a9a8a8;
        padding: 20px;
        margin-top: 30px;
        border-radius: 10px;
        li {
          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }

      .sample-video-area {
        border-radius: 30px;
        background: #e8f0ff;
        padding: 25px;
        .h3-title {
          font-size: 20px;
          color: #333333;
          margin-bottom: 10px;
        }
        .sample-video-list {
          display: flex;
          flex-direction: row;
          column-gap: 50px;
          justify-content: center;
          li {
            border-radius: 100px;
            img {
              width: 135px;
              height: 135px;
              border-radius: 100px;
              box-sizing: border-box;
              border: 2px solid transparent;
              &.selected {
                border: 2px solid red;
              }
            }
          }
        }
      }
      .upload-btn-area {
        width: 130px;
        margin: 0 auto;
        margin-top: 24px;
      }
    }
  }
</style>
