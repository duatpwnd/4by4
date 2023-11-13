<template>
  <input
    class="base-input"
    autocomplete="true"
    autofocus
    @input="onInput"
    @keyup.enter="enterEvent"
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    :disabled="isDisabled"
  />
</template>
<script setup lang="ts">
  import { toRefs } from "vue";
  interface Props {
    modelValue: string;
    type: string;
    placeholder: string;
    onlyText?: boolean;
    isDisabled?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    isDisabled: false,
  });
  const emit = defineEmits(["update:modelValue", "update:enterEvent"]);
  const {
    type,
    placeholder,
    onlyText,
    modelValue,
    isDisabled = false,
  } = toRefs(props);
  const enterEvent = (event: KeyboardEvent) => {
    emit("update:enterEvent");
  };
  const onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (onlyText.value) {
      target.value = target.value.replace(/[^0-9]/g, "");
      if (target.value == "0") {
        target.value = "";
      }
    }
    emit("update:modelValue", (event.target as HTMLInputElement).value);
  };
</script>
<style scoped lang="scss">
  .base-input {
    width: 100%;
    font-size: 25px;
    font-weight: bold;
    padding: 18px;
    box-sizing: border-box;
    color: black;
    background-color: #f3f7fa;
    border-radius: 10px;
    border: 2px solid #f3f7fa;
    &:focus {
      border: 2px solid #686de0;
    }
  }
</style>
