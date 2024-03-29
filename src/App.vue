<script setup lang="ts">
  import { DotLoader } from "vue3-spinner";
  import { ref, inject, watch } from "vue";
  import { EventType, Emitter } from "mitt";
  import BaseAlertModal from "@components/common/BaseAlertModal.vue";
  import { useRoute } from "vue-router";
  const noticeMessage = ref("");
  const closeText = ref("close");
  const isActiveAlert = ref(false);
  const isLoading = ref(false);
  const isActiveCloseButton = ref(true);
  const fn = ref();
  const closeFn = ref();
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive: boolean;
        message?: string;
        closeText?: string;
        fn?: () => void;
        closeFn?: () => void;
        isLoading?: boolean;
        isActiveCloseButton?: boolean;
      }
    >
  >;
  const route = useRoute();
  watch(route.query, (curr, prev) => {});
  emitter.on("update:alert", (obj) => {
    isActiveAlert.value = obj.isActive;
    fn.value = obj.fn;
    closeFn.value = obj.closeFn;
    isActiveCloseButton.value = true;
    closeText.value = "close";
    if (obj.message !== undefined) {
      noticeMessage.value = obj.message;
    }
    if (obj.isActiveCloseButton !== undefined) {
      isActiveCloseButton.value = obj.isActiveCloseButton;
    }
    if (obj.closeText !== undefined) {
      closeText.value = obj.closeText;
    }
  });
  emitter.on("update:loading", (obj) => {
    isLoading.value = obj.isLoading as boolean;
  });
</script>

<template>
  <DotLoader :loading="isLoading" color="#686de0" size="100px" />
  <BaseAlertModal
    v-if="isActiveAlert"
    :isActiveAlert="isActiveAlert"
    :closeText="closeText"
    :isActiveCloseButton="isActiveCloseButton"
    :fn="fn"
    :closeFn="closeFn"
    :text="noticeMessage"
  />
  <router-view></router-view>
</template>

<style>
  .loader {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid #686de0;
    width: 19px;
    height: 19px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .v-spinner {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    .v-dot {
      position: fixed !important;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 11;
    }
  }
</style>
