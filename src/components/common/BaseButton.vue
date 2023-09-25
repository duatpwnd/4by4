<template>
  <button type="button" class="base-button">{{ text }}</button>
</template>
<script setup lang="ts">
  import { onMounted, toRefs } from "vue";
  interface Props {
    text: string;
    style?: CSSStyleValue;
  }
  const props = defineProps<Props>();
  const { text, style } = toRefs(props);
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .base-button {
    background-color: #686de0;
    color: white;
    font-weight: bold;
    font-size: 25px;
    border-radius: 10px;
    width: 100%;
    padding: 18px 0;
  }
</style>
