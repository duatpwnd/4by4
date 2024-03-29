<template>
  <ProgressModal
    v-if="isActiveProgressModal"
    text="tar file uploading..."
    :progressValue="progressValue"
    @update:close-progress-modal="close"
  />
  <FontAwesomeIcon
    icon="xmark"
    class="close-button"
    @click="
      router.push(
        `/admin?mainCategory=modelManage&subCategory=modelStatus&currentStatus=${route.query.currentStatus}`
      )
    "
  />
  <div class="register-container">
    <div class="file-upload-wrapper">
      <div
        id="drag-drop"
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
          <input
            type="file"
            id="file-upload"
            accept=".tar"
            @change="fileUpload"
          />
        </strong>
        <ul class="guide-msg">
          <li>
            도커 이미지 파일을 tar 확장자로 저장하여 업로드 해주시길
            바랍니다.<br />
            cf) https://docs.docker.com/engine/reference/commandline/save/
          </li>
        </ul>
      </div>
      <p class="notice-message" v-if="validCheck.files">
        Please upload the tar file.
      </p>

      <div class="input-area">
        <div>
          <label class="title">Model Name</label>
          <BaseInput
            @update:modelValue="(newValue:string) => onChange(newValue,'modelName')"
            :modelValue="modelData.modelName"
            type="text"
            placeholder="Insert Model Name"
          />
          <p class="notice-message" v-if="validCheck.modelName">
            Only English, numbers, underscores (_), and dashes (-) can be used.
            However, it is not possible to start with an underscore or a dash.
          </p>
        </div>
        <div>
          <label class="title"
            >Project Name(denoise, colorgrade, superresol)</label
          >
          <BaseSelect
            @update:select-box="(obj:ProjectListType) => {
              validCheck.projectName = false;
              selectedProject = obj;
            }"
            :options="projectList"
            name="name"
            :text="
              selectedProject == null
                ? 'Select Project name'
                : selectedProject.name
            "
          />

          <!-- <BaseInput
            @update:modelValue="(newValue:string) => (modelData.projectName = newValue)"
            :modelValue="modelData.projectName"
            type="text"
            placeholder="Insert Project Name"
          /> -->
          <p class="notice-message" v-if="validCheck.projectName">
            Please select a project name.
          </p>
        </div>
        <div>
          <label class="title">Image Name(image repo)</label>
          <BaseInput
            @update:modelValue="(newValue:string) => onChange(newValue,'imageName')"
            :modelValue="modelData.imageName"
            type="text"
            placeholder="Insert Image Name"
          />
          <p class="notice-message" v-if="validCheck.imageName">
            Only English, numbers, underscores (_), and dashes (-) can be used.
            However, it is not possible to start with an underscore or a dash.
          </p>
        </div>
        <div>
          <label class="title">Tag Name(Version)</label>
          <BaseInput
            @update:modelValue="(newValue:string) => onChange(newValue,'tagName')"
            :modelValue="modelData.tagName"
            type="text"
            placeholder="Insert Tag Name"
          />
          <p class="notice-message" v-if="validCheck.tagName">
            Only English, numbers, dot, underscores (_), and dashes (-) can be
            used. However, it is not possible to start with an underscore or a
            dash.
          </p>
        </div>
      </div>
      <ul class="file-name-area" v-if="files != null">
        <li>
          {{ files.name }}
        </li>
      </ul>
    </div>
    <div id="progress-bar"></div>

    <div class="model-register">
      <BaseButton text="모델 등록" @click="register" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import ProgressModal from "@/components/modal/upload/ProgressModal.vue";
  import { AxiosInstance } from "axios";
  import { ref, inject, reactive } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRouter, useRoute } from "vue-router";
  import BaseInput from "@/components/common/BaseInput.vue";
  import serviceAPI from "@api/services";
  import { connectSSE, sseEvents, getModelList } from "./model";
  interface ProjectListType {
    name: string;
    value: string;
  }
  interface ModelInfoType {
    modelName: string;
    imageName: string;
    tagName: string;
  }

  const router = useRouter();
  const route = useRoute();
  const regType = /^[A-Za-z0-9]+[A-Za-z0-9_-]*$/;
  const tagRegType = /^[A-Za-z0-9]+[A-Za-z0-9_.-]*$/;
  const onChange = (newValue: string, key: keyof ModelInfoType) => {
    modelData[key] = newValue;
    if (key == "tagName") {
      if (tagRegType.test(newValue)) {
        validCheck[key] = false;
      } else {
        validCheck[key] = true;
      }
    } else {
      if (regType.test(newValue)) {
        validCheck[key] = false;
      } else {
        validCheck[key] = true;
      }
    }
  };
  const projectList = ref<ProjectListType[]>([
    {
      name: "enhance",
      value: "enhance",
    },
    {
      name: "colorize",
      value: "colorize",
    },
    {
      name: "upscale",
      value: "upscale",
    },
  ]); // 프로젝트 리스트
  const selectedProject = ref<ProjectListType | null>(null); // 선택된 프로젝트

  const isDragged = ref(false);
  const files = ref<File | null>(null);
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const isActiveProgressModal = ref(false);
  const progressValue = ref(0);
  const controller = new AbortController();
  const validCheck = reactive({
    files: false,
    imageName: false,
    projectName: false,
    modelName: false,
    tagName: false,
  });
  const modelData = reactive<ModelInfoType>({
    modelName: "",
    tagName: "",
    imageName: "",
  });

  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isLoading?: boolean;
        isActive?: boolean;
        message?: string;
        isActiveCloseButton?: boolean;
      }
    >
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
      files.value = target.files[0];
    }
  };
  const fileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files) {
      if (target.files[0] !== undefined) {
        files.value = target.files[0];
        validCheck.files = false;
      }
    }
  };
  const close = () => {
    isActiveProgressModal.value = false;
    controller.abort();
    router.push("/admin?mainCategory=modelManage&subCategory=modelStatus");
  };

  const register = () => {
    if (selectedProject.value == null) {
      validCheck.projectName = true;
    } else {
      validCheck.projectName = false;
    }
    if (!regType.test(modelData.modelName)) {
      validCheck.modelName = true;
    } else {
      validCheck.modelName = false;
    }
    if (!tagRegType.test(modelData.tagName)) {
      validCheck.tagName = true;
    } else {
      validCheck.tagName = false;
    }
    if (!regType.test(modelData.imageName)) {
      validCheck.imageName = true;
    } else {
      validCheck.imageName = false;
    }

    if (files.value == null) {
      validCheck.files = true;
    } else {
      validCheck.files = false;
    }
    if (Object.values(validCheck).indexOf(true) == -1) {
      const file = files.value as File;
      const form = new FormData();
      form.append(
        "projectName",
        (selectedProject.value as ProjectListType).value
      );
      form.append("modelName", modelData.modelName);
      form.append("imageName", modelData.imageName);
      form.append("tag", modelData.tagName);
      // 모델 업로드 중복 체크
      defaultInstance
        .post(serviceAPI.modelCheckDuplication, form)
        .then((result) => {
          console.log("모델 중복 체크", result);
          isActiveProgressModal.value = true;
          form.append("file", file);
          // 모델 업로드
          if (sseEvents.value !== null) {
            sseEvents.value.close();
          }
          defaultInstance
            .postForm(serviceAPI.upload, form, {
              signal: controller.signal,
              onUploadProgress: (progressEvent) => {
                const percentage =
                  (progressEvent.loaded * 100) /
                  (progressEvent.total as number);
                progressValue.value = Number(percentage.toFixed(0));
                if (percentage == 100) {
                  isActiveProgressModal.value = false;
                  emitter.emit("update:alert", {
                    isActive: true,
                    message: "모델 등록중 입니다.",
                    isActiveCloseButton: false,
                  });
                }
              },
              headers: {
                "Content-Type": "multipart/form-data",
                type: "model",
              },
            })
            .then((result) => {
              console.log("모델 등록 결과:", result);
              getModelList(1, "ALL");
              emitter.emit("update:alert", {
                isActive: false,
              });
              router.push(
                "/admin?mainCategory=modelManage&subCategory=modelStatus"
              );
              connectSSE();
            })
            .catch((err) => {
              console.log("모델 등록 에러:", err);
              emitter.emit("update:alert", {
                isActive: true,
                message: err.response.data.message,
                isActiveCloseButton: true,
              });
            });
        })
        .catch((err) => {
          console.log("모델 업로드 벨리데이션 체크 에러:", err);
          emitter.emit("update:alert", {
            isActive: true,
            message: err.response.data.message,
            isActiveCloseButton: true,
          });
        });
    }
  };
</script>
<style scoped lang="scss">
  .close-button {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 40px;
    cursor: pointer;
  }

  .register-container {
    position: relative;
    padding-top: 60px;
    width: 70%;
    margin: 0 auto;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    .notice-message {
      color: red;
      margin-top: 10px;
    }

    .file-upload-wrapper {
      .file-upload-area {
        text-align: center;
        border-bottom: 3px solid #a9a8a8;
        padding-bottom: 20px;
        .guide-msg {
          margin-top: 20px;
          padding-left: 90px;
          position: relative;
          li {
            line-height: 30px;
            text-align: left;
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
      .input-area {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 100px;
        grid-row-gap: 40px;
        margin-top: 20px;
        input {
          font: {
            size: 20px;
          }
        }
        .title {
          display: block;
          margin-bottom: 10px;
          font: {
            size: 20px;
          }
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
