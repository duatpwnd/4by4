<template>
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
          <input type="file" id="file-upload" @change="fileUpload" multiple />
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
  import { onMounted, ref, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
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
      isDragged.value = false;
      const target = event.dataTransfer;
      if (target && target.files) {
        files.value = target.files;
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
  const submit = () => {
    emit(
      "update:upload",
      files.value == null
        ? [sampleVideos.value[selectedSampleVideo.value]]
        : files.value
    );
    close();
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
    z-index: 4;

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
