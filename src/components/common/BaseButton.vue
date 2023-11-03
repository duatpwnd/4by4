<template>
  <button :disabled="disabled" type="button" class="base-button">
    {{ text }}
  </button>
</template>
<script setup lang="ts">
  import { toRefs } from "vue";
  interface Props {
    text: string;
    style?: CSSStyleValue;
    disabled?: boolean;
  }
  const props = defineProps<Props>();
  const { text, style, disabled } = toRefs(props);
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
