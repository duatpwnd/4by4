<template>
  <div class="settings-container">
    <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
    <dl>
      <div>
        <dt>Model Name</dt>
        <dd>Denoise</dd>
      </div>
      <div>
        <dt>Tag</dt>
        <dd>v1.1</dd>
      </div>
      <div>
        <dt>Project Name</dt>
        <dd>aination</dd>
      </div>
    </dl>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
  const router = useRouter();
  const route = useRoute();
  const hostIP = ref("");
  const hostName = ref("");
  const change = () => {
    if (hostName.value.trim().length == 0) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "host name을 입력해주세요,",
      });
    } else if (hostIP.value.trim().length == 0) {
      emitter.emit("update:alert", {
        isActive: true,
        message: "host IP를 입력해주세요,",
      });
    } else {
    }
  };
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .settings-container {
    position: relative;
    width: 70%;
    margin: 0 auto;
    padding-top: 40px;
    .close-button {
      position: absolute;
      top: -40px;
      right: 0px;
      font-size: 40px;
      cursor: pointer;
    }
    dl {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 30px;
      div {
        width: 100%;
        dt {
          font-size: 20px;
        }
        dd {
          font-size: 25px;
          border-radius: 15px;
          background: #f3f7fa;
          padding: 10px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
