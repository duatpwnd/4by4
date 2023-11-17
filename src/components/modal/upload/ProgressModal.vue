<template>
  <div class="mask"></div>
  <div class="progress-modal">
    <p>
      {{ text }}<br /><strong class="progress-value"
        >{{ progressValue }}%</strong
      >
    </p>
    <div class="progress-bar-area">
      <span
        class="item"
        v-for="(item, index) in 10"
        :class="Number(index + 1) * 10 <= progressValue ? 'fill' : ''"
      ></span>
    </div>
    <BaseButton @click="emit('update:close-progress-modal')" text="Cancel" />
  </div>
</template>
<script setup lang="ts">
  import { toRefs } from "vue";
  interface Props {
    text: string;
    progressValue: number;
  }
  const props = defineProps<Props>();
  const { progressValue, text } = toRefs(props);
  const emit = defineEmits(["update:close-progress-modal"]);
</script>
<style scoped lang="scss">
  .mask {
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .progress-modal {
    min-width: 650px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: white;
    border-radius: 6px;
    padding: 60px;
    box-sizing: border-box;
    p {
      text-align: center;
      line-height: 60px;
      white-space: nowrap;
      font: {
        size: 38px;
        weight: 700;
      }
      .progress-value {
        color: #686de0;
        display: block;
      }
    }
    .progress-bar-area {
      display: flex;
      flex-direction: row;
      column-gap: 10px;
      margin: 40px 0;
      .item {
        width: 100%;
        background: #e9e9e9;
        height: 34px;
        &.fill {
          background: #307fe2;
        }
        &:first-child {
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        }
        &:last-child {
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
        }
      }
    }
    .base-button {
      width: 125px;
      margin: 0 auto;
      display: block;
    }
  }
</style>
