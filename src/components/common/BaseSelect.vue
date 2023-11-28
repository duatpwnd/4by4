<template>
  <div class="select-box">
    <button class="label" v-html="text" ref="selectedText"></button>
    <ul class="optionList" v-show="isActive">
      <slot name="list">
        <li
          class="optionItem"
          v-for="(option, index) in options"
          v-if="options.length > 0"
          :key="index"
          @click="select(option, index)"
          :class="[option.disabled == true ? 'disabled' : '']"
        >
          <template v-for="(el, index1) in name.split(',')">
            {{
              index1 != name.split(",").length - 1
                ? option[el].concat("/")
                : option[el]
            }}
          </template>
        </li>
      </slot>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, toRefs } from "vue";
  interface Props {
    options: any[];
    name: string;
    text: string;
  }
  const props = defineProps<Props>();
  const currentIndex = ref(-1);
  const emit = defineEmits(["update:select-box"]);
  const selectedText = ref<HTMLButtonElement | null>(null);
  const { options, text, name } = toRefs(props);
  const isActive = ref(false);
  const select = (option: File, index: number) => {
    currentIndex.value = index;
    emit("update:select-box", option);
    isActive.value = false;
  };
  onMounted(() => {
    // 요소 밖 클릭시 셀렉트박스를 닫기위한 이벤트
    document.body.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      if (selectedText.value?.contains(target)) {
        isActive.value = !isActive.value;
      } else {
        isActive.value = false;
      }
    });
  });
</script>
<style scoped lang="scss">
  .select-box {
    position: relative;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    @include background("arrow_bottom_ico.svg", 10px, 5px, center right 20px);
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
    .label {
      text-align: left;
      padding: 20px;
      align-items: center;
      width: calc(100% - 12px);
      height: inherit;
      border: 0 none;
      outline: 0 none;
      background: transparent;
      @include ellipsis(1);
      cursor: pointer;
    }
    .optionList {
      position: absolute;
      top: 61px;
      left: -1px;
      width: 100%;
      border: 1px solid transparent;
      color: black;
      padding: 0;
      overflow: hidden;
      background: white;
      transition: 0.3s ease-in;
      z-index: 1;
      min-height: 56px;
      background-color: #dfdfdf;
      max-height: 280px;
      overflow-y: auto;
      .optionItem {
        padding: 20px;
        @include ellipsis(1);
        &:hover {
          background-color: #ccc;
        }
        &.active {
          background-color: #b3b6f6;
        }

        &.disabled {
          background-color: rgb(255 139 139 / 50%);
        }
      }
    }
  }
</style>
