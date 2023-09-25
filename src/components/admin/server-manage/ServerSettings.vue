<template>
  <div class="settings-container">
    <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
    <div>
      <div class="input-area">
        <BaseInput
          type="text"
          placeholder="host name"
          @update:modelValue="(newValue:string) => (hostName = newValue)"
          :modelValue="hostName"
        />
        <BaseInput
          type="text"
          placeholder="host IP"
          @update:modelValue="(newValue:string) => (hostIP = newValue)"
          :modelValue="hostIP"
        />
      </div>
      <div class="info">
        <h3>Resource</h3>
        <div class="row">
          <strong class="title">CPU : </strong>
          <strong>i9-10900X</strong>
          <strong>10cores</strong>
        </div>
        <div class="row">
          <strong class="title">Memory : </strong>
          <strong>128GB</strong>
        </div>
        <div class="row">
          <strong class="title">GPU : </strong>
          <strong>Geforce RTX 4080</strong>
          <strong>16GB</strong>
        </div>
      </div>
      <div class="server-change">
        <BaseButton text="설정 변경" @click="change" />
      </div>
    </div>
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
    .input-area {
      display: flex;
      column-gap: 20px;
    }
    .info {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .row {
        margin-top: 20px;
        .title {
          color: blue;
          width: 80px;
          display: inline-block;
        }
      }
    }
    .server-change {
      width: 200px;
      margin: 0 auto;
      margin-top: 40px;
    }
  }
</style>
