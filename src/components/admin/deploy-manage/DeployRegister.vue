<template>
  <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
  <div class="register-container">
    <div class="select-box-area">
      <div>
        <label>HOST</label>
        <BaseSelect
          @update:select-box="(obj:SelectedType) => (selectedHost = obj)"
          :options="hostList"
          name="name"
          :text="selectedHost == null ? 'Select Server IP' : selectedHost.name"
        />
      </div>
      <div>
        <label>GPU</label>
        <BaseSelect
          @update:select-box="(obj:SelectedType) => (selectedGpu = obj)"
          :options="gpuList"
          name="name"
          :text="selectedGpu == null ? 'Select GPU ID' : selectedGpu.name"
        />
      </div>
      <div>
        <label>MODEL</label>
        <BaseSelect
          @update:select-box="(obj:SelectedType) => (selectedModel = obj)"
          :options="modelList"
          name="name"
          :text="
            selectedModel == null ? 'Select Server IP' : selectedModel.name
          "
        />
      </div>
      <div>
        <label>TAGS</label>
        <BaseSelect
          @update:select-box="(obj:SelectedType) => (selectedTags = obj)"
          :options="tagList"
          name="name"
          :text="selectedTags == null ? 'Select Server IP' : selectedTags.name"
        />
      </div>
    </div>
    <div class="deploy-register">
      <BaseButton text="배포 등록" @click="register" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import BaseSelect from "@/components/common/BaseSelect.vue";
  interface SelectedType {
    name: string;
  }
  const router = useRouter();
  const selectedHost = ref<SelectedType | null>(null); // 선택된 host
  const selectedGpu = ref<SelectedType | null>(null); // 선택된 gpu
  const selectedModel = ref<SelectedType | null>(null); // 선택된 model
  const selectedTags = ref<SelectedType | null>(null); // 선택된 tags
  const hostList = ref<SelectedType[]>([{ name: "test" }]); // host 리스트
  const gpuList = ref<SelectedType[]>([{ name: "test" }]); // gpu 리스트
  const modelList = ref<SelectedType[]>([{ name: "test" }]); // model 리스트
  const tagList = ref<SelectedType[]>([{ name: "test" }]); // tag 리스트
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
    .select-box-area {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
      grid-row-gap: 40px;
      label {
        display: block;
        margin-bottom: 10px;
      }
    }
    .deploy-register {
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
