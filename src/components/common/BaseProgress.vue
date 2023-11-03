<template>
  <progress :value="value" max="100" />
</template>
<script setup lang="ts">
  import { toRefs } from "vue";
  interface Props {
    value: string;
  }
  const props = defineProps<Props>();
  const { value } = toRefs(props);
</script>
<style scoped lang="scss">
  progress {
    appearance: none;
    -webkit-appearance: none;
    position: relative;
    height: 20px;
    width: 100%;
  }
  progress:after {
    content: attr(value) "%";
    position: absolute;
    top: 0;
    text-align: center;
    line-height: 22px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    color: black;
  }
  ::-webkit-progress-bar {
    background-color: #e9ecef;
    border-radius: 6px;
  }

  ::-webkit-progress-value {
    background: linear-gradient(310deg, #2152ff, #21d4fd);
    width: 75%;
    border-radius: 6px;
  }
</style>
