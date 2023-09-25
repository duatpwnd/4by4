<template>
  <input
    type="radio"
    :checked="value == modelValue"
    :name="name"
    :id="value"
    @click="emit('update:modelValue', value)"
  />
</template>
<script setup lang="ts">
  import { toRefs } from "vue";
  interface Props {
    name: string;
    modelValue: string;
    value: string;
  }
  const props = defineProps<Props>();
  const emit = defineEmits(["update:modelValue"]);
  const { name, value, modelValue } = toRefs(props);
</script>
<style scoped lang="scss">
  [type="radio"] {
    appearance: none;
    border: 1px solid #616161;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
  }

  [type="radio"]:checked {
    border: 0.4em solid #686de0;
  }
</style>
