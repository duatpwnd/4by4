<script setup lang="ts">
  import { toRefs, defineProps } from "vue";
  interface Props {
    isChecked?: boolean;
    value?: string;
    fieldId: string;
  }
  const props = defineProps<Props>();
  const { isChecked } = toRefs(props);
</script>
<template>
  <span class="switch-btn">
    <label class="field-id" :for="fieldId" v-if="value != undefined">{{
      value
    }}</label>
    <label class="switch">
      <input
        type="checkbox"
        :checked="isChecked"
        :id="fieldId"
        @click="$emit('update:modelValue', !isChecked)"
      />
      <span class="slider round"></span>
    </label>
  </span>
</template>
<style scoped lang="scss">
  .switch-btn {
    .field-id {
      vertical-align: middle;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
      overflow: hidden;
      border-radius: 34px;
      vertical-align: middle;
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        background-color: #e9ecef;
      }
      .slider.round {
        border-radius: 34px;
      }
      .slider.round:before {
        border-radius: 50%;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 2px;
        top: 0px;
        bottom: 0;
        margin: auto;
        background: white;

        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      input {
        display: none;
      }
      input:checked + .slider {
        background: #0095ff;
      }
      input:checked + .slider::before {
        background-color: white;
        // -webkit-transform: translateX(50px);
        // -ms-transform: translateX(50px);
        transform: translateX(22px);
      }
    }
  }
</style>
