<template>
  <div
    class="mask"
    v-if="isActiveAlert"
    @click="emitter.emit('update:alert', { isActive: false })"
  ></div>
  <div class="alert-modal-container" v-if="isActiveAlert">
    <strong class="msg" v-html="text"></strong>
    <div class="close-area">
      <BaseButton
        v-if="fn !== undefined"
        text="Ok"
        @click="ok"
        class="ok-button"
      />
      <BaseButton
        text="Close"
        class="close-button"
        @click.stop="emitter.emit('update:alert', { isActive: false })"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { toRefs, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  interface Props {
    text: string;
    isActiveAlert: boolean;
    fn?: () => void;
  }
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
  const props = defineProps<Props>();
  const { text, isActiveAlert, fn } = toRefs(props);
  const ok = () => {
    emitter.emit("update:alert", { isActive: false });
    fn && fn.value && fn.value();
  };
</script>
<style scoped lang="scss">
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 6;
  }
  .alert-modal-container {
    background-color: white;
    border-radius: 10px;
    padding: 50px;
    position: fixed;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    .msg {
      color: rgb(33, 37, 41);
      text-align: center;
      width: 100%;
      display: block;
      line-height: 24px;
      position: relative;
    }
  }
  .close-area {
    display: flex;
    column-gap: 20px;
    margin-top: 40px;
    .base-input {
      color: white;
    }
    .close-button {
      font-size: 16px;
      background-color: rgb(108, 117, 125);
    }
    .ok-button {
      font-size: 16px;
      background-color: #007bff;
    }
  }
</style>
