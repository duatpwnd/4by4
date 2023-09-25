<template>
  <div class="settings-container">
    <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
    <dl>
      <div>
        <dt>Host:port</dt>
        <dd>8000</dd>
      </div>
      <div>
        <dt>GPU</dt>
        <dd>[0]</dd>
      </div>
      <div>
        <dt>Container ID</dt>
        <dd>712321389</dd>
      </div>
      <div>
        <dt>Container Status</dt>
        <dd>RUNNING</dd>
      </div>
      <div>
        <dt>Deploy Status</dt>
        <dd>DEPLOYED</dd>
      </div>
      <div>
        <dt>Model Image</dt>
        <dd>aination/denoise:latest</dd>
      </div>
    </dl>
    <div class="button-area">
      <button>Start</button>
      <button>Stop</button>
      <button>Kill</button>
      <button>Restart</button>
      <button>Pause</button>
      <button>Resume</button>
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
    height: 100%;
    box-sizing: border-box;
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
    .button-area {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      column-gap: 20px;
      position: absolute;
      bottom: 0;
      width: 100%;
      button {
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
      }
    }
  }
</style>
