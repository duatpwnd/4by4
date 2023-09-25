<script setup lang="ts">
  import { ref, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  import BaseAlertModal from "@components/common/BaseAlertModal.vue";
  const noticeMessage = ref("");
  const isActiveAlert = ref(false);
  const fn = ref();
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive: boolean;
        message?: string;
        fn?: () => void;
      }
    >
  >;
  emitter.on("update:alert", (obj) => {
    isActiveAlert.value = obj.isActive;
    fn.value = obj.fn;
    if (obj.message !== undefined) {
      noticeMessage.value = obj.message;
    }
  });
</script>

<template>
  <BaseAlertModal
    v-if="isActiveAlert"
    :isActiveAlert="isActiveAlert"
    :fn="fn"
    :text="noticeMessage"
  />
  <router-view></router-view>
</template>

<style></style>
