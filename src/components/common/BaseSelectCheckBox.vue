<template>
  <div class="select-box" ref="selectedText">
    <div class="button-area" @click="isActive = !isActive">
      <button
        v-if="typeof text === 'string'"
        class="label"
        v-html="text"
      ></button>
      <span v-else v-for="(item, index) in text" :key="index" class="label">
        {{ item.name }}&nbsp;
      </span>
    </div>
    <ul class="optionList" v-show="isActive">
      <li class="optionItem" v-for="(option, index) in options" :key="index">
        <label :for="option[name]">{{ option[name] }}</label>
        <BaseCheckBox @update:checkModelValue="select" :id="option[name]" />
      </li>
      <li class="complete-area">
        <BaseButton text="선택완료" @click="complete" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, toRefs } from "vue";
  import BaseButton from "./BaseButton.vue";
  interface Props {
    options: any[];
    name: string;
    text: string | { name: string }[];
  }
  const props = defineProps<Props>();
  const emit = defineEmits(["update:select-box"]);
  const selectedText = ref<HTMLButtonElement | null>(null);
  const { options, text, name } = toRefs(props);
  const isActive = ref(false);
  const selectedArr: { name: string }[] = [];
  const complete = () => {
    emit("update:select-box", selectedArr);
    isActive.value = false;
  };
  const select = (option: string) => {
    const findIndex = selectedArr.findIndex((el) => {
      return el.name == option;
    });
    if (findIndex == -1) {
      selectedArr.push({ name: option });
    } else {
      selectedArr.splice(findIndex, 1);
    }
  };
  onMounted(() => {
    document.body.addEventListener("click", (e: Event) => {
      const target = e.target as HTMLElement;
      if (selectedText.value?.contains(target)) {
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
    .button-area {
      padding: 20px;
      width: calc(100% - 52px);
      box-sizing: border-box;
      @include ellipsis(1);
      .label {
        background: transparent;
        cursor: pointer;
      }
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
      .optionItem {
        display: flex;
        justify-content: space-between;
        label {
          align-self: center;
          width: calc(100% - 40px);
          padding: 20px;
          box-sizing: border-box;
        }
        :deep(input[type="checkbox"]) {
          & + label {
            align-self: center;
            margin-right: 20px;
          }
        }
        &:hover {
          background-color: #ccc;
        }
      }
      .complete-area {
        width: 200px;
        margin: 0 auto;
        .base-button {
          padding: 10px 0;
          font-size: 17px;
          border-radius: 0;
        }
      }
    }
  }
</style>
