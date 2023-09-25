<template>
  <input type="checkbox" :id="id" @click="emit('update:checkModelValue', id)" />
  <label :for="id"></label>
</template>
<script setup lang="ts">
  import { toRefs } from "vue";
  interface Props {
    id: string;
  }
  const props = defineProps<Props>();
  const emit = defineEmits(["update:checkModelValue"]);
  const { id } = toRefs(props);
</script>
<style scoped lang="scss">
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 1px solid #616161;
    border-radius: 4px;
    position: relative;
  }
  input:checked + label::after {
    content: "✔";
    width: 22px;
    height: 14px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
</style>
