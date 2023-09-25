<template>
  <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
  <div class="register-container">
    <div class="file-upload-wrapper">
      <div
        class="file-upload-area"
        :class="isDragged ? 'dragged' : ''"
        @dragenter="onDragenter"
        @dragover="onDragover"
        @dragleave="onDragleave"
        @drop="onDrop"
      >
        <strong>
          Drop Tar File here to upload or
          <label class="file-upload-txt" for="file-upload">Choose File</label>
          <input type="file" id="file-upload" @change="fileUpload" multiple />
        </strong>
      </div>
      <ul class="guide-msg">
        <li>
          도커 이미지를 다음과 같이 변경해주시길 바랍니다.<br />
          1) docker tag {image ID} {Harbor IP}/{프로젝트명}/{모델명}:{tag명}<br />
          예) docker tag
        </li>
        <li>
          도커 이미지 파일을 tar 확장자로 저장하여 업로드 해주시길 바랍니다.<br />
          cf) https://docs.docker.com/engine/reference/commandline/save/
        </li>
      </ul>

      <ul class="file-name-area" v-if="files != null">
        <li v-for="(file, index) in files" :key="index">
          {{ file.name }}
        </li>
      </ul>
    </div>
    <div class="model-register">
      <BaseButton text="모델 등록" @click="register" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  const router = useRouter();
  const route = useRoute();
  const registrationItem = ref([{ hostName: "", hostIP: "" }]);
  const isDragged = ref(false);
  const files = ref<FileList | null>(null);
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
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
    event.preventDefault();
    isDragged.value = false;
    const target = event.dataTransfer;
    if (target && target.files) {
      files.value = target.files;
    }
  };
  const fileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
      files.value = target.files;
    }
  };
  const register = () => {};
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .close-button {
    position: absolute;
    top: -40px;
    right: 40px;
    font-size: 40px;
    cursor: pointer;
  }

  .register-container {
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    .file-upload-wrapper {
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
        padding-left: 90px;
        position: relative;
        li {
          line-height: 30px;
          font: {
            size: 20px;
          }
          list-style-type: disc;
          &:not(:first-child) {
            margin-top: 20px;
          }
        }
        &::before {
          vertical-align: middle;
          content: url("@images/safety_ico.svg");
          position: absolute;
          top: 0;
          left: 0;
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
    }
    .model-register {
      width: 200px;
      margin-top: 40px;
      position: fixed;
      bottom: 20px;
      left: 200px;
      right: 0;
      margin: auto;
    }
  }
</style>
