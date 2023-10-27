<script setup lang="ts">
  import { DotLoader } from "vue3-spinner";
  import { ref, inject, watch } from "vue";
  import { EventType, Emitter } from "mitt";
  import BaseAlertModal from "@components/common/BaseAlertModal.vue";
  import { useRoute } from "vue-router";
  const noticeMessage = ref("");
  const isActiveAlert = ref(false);
  const isLoading = ref(false);
  const fn = ref();
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive: boolean;
        message?: string;
        fn?: () => void;
        isLoading?: boolean;
      }
    >
  >;
  const route = useRoute();
  watch(route.query, (curr, prev) => {
    console.log(curr, prev);
  });
  emitter.on("update:alert", (obj) => {
    isActiveAlert.value = obj.isActive;
    fn.value = obj.fn;
    if (obj.message !== undefined) {
      noticeMessage.value = obj.message;
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
    :fn="fn"
    :text="noticeMessage"
  />
  <router-view></router-view>
</template>

<style>
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
