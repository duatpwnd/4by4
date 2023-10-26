<template>
  <FontAwesomeIcon icon="xmark" class="close-button" @click="router.go(-1)" />
  <div class="register-container">
    <div v-for="(item, index) in registrationItem" :key="index" class="row">
      <BaseInput
        type="text"
        placeholder="host name"
        @update:modelValue="(newValue:string) => (registrationItem[index].hostName = newValue)"
        :modelValue="item.hostName"
      />
      <BaseInput
        type="text"
        placeholder="host IP"
        @update:modelValue="(newValue:string) => (registrationItem[index].hostIP = newValue)"
        :modelValue="item.hostIP"
      />
      <div class="button-area">
        <FontAwesomeIcon
          icon="circle-plus"
          class="add-button"
          @click="add(index)"
        />
        <FontAwesomeIcon
          v-if="registrationItem.length > 1"
          icon="circle-minus"
          class="remove-button"
          @click="remove(index)"
        />
      </div>
    </div>
    <div class="server-register">
      <BaseButton text="서버 등록" @click="register" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, inject } from "vue";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  const router = useRouter();
  const route = useRoute();
  const registrationItem = ref([{ hostName: "", hostIP: "" }]);
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message?: string }>
  >;
  const add = (index: number) => {
    registrationItem.value.splice(index + 1, 0, {
      hostName: "",
      hostIP: "",
    });
  };
  const remove = (index: number) => {
    registrationItem.value.splice(index, 1);
  };

  const register = () => {
    let condition = true;
    for (let i = 0; i < registrationItem.value.length; i++) {
      if (registrationItem.value[i].hostName.trim().length == 0) {
        emitter.emit("update:alert", {
          isActive: true,
          message: `${i + 1}번째 host name을 입력해주세요.`,
        });
        condition = false;
        break;
      } else if (registrationItem.value[i].hostIP.trim().length == 0) {
        emitter.emit("update:alert", {
          isActive: true,
          message: `${i + 1}번째 host IP를 입력해주세요.`,
        });
        condition = false;
        break;
      }
    }
    if (condition) {
      const map = registrationItem.value.map((el) => {
        return {
          hostName: el.hostName,
          hostIP: el.hostIP,
        };
      });
      console.log(map);
    }
  };
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .close-button {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 40px;
    cursor: pointer;
  }

  .register-container {
    position: relative;
    padding-top: 60px;
    width: 70%;
    margin: 0 auto;
    height: 100%;
    overflow-y: auto;
    padding-right: 20px;
    box-sizing: border-box;
    .row {
      display: flex;
      column-gap: 20px;
      &:not(:first-of-type) {
        margin-top: 20px;
      }
      .button-area {
        width: 100%;
        text-align: right;
        align-self: center;
        .add-button,
        .remove-button {
          font-size: 40px;
          cursor: pointer;
        }
        .add-button {
          color: #0095ff;
          margin-right: 10px;
        }
        .remove-button {
          color: #e3098c;
        }
      }
    }
    .server-register {
      width: 200px;
      margin-top: 40px;
      position: fixed;
      bottom: 20px;
      left: 200px;
      right: 0;
      margin: auto;
    }
  }
</style>
