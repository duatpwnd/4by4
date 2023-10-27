<template>
  <div class="change-email-wrapper">
    <BaseInput
      @update:modelValue="emailValidCheck"
      :modelValue="email"
      type="text"
      placeholder="Email"
    />
    <p class="guide-message" v-if="validCheck.email">
      올바른 이메일 형식을 입력해주세요.
    </p>

    <BaseButton type="button" text="이메일 발송" @click="request" />
  </div>
</template>

<script setup lang="ts">
  import { ref, inject, reactive } from "vue";
  import { EventType, Emitter } from "mitt";
  import { AxiosInstance } from "axios";
  import serviceAPI from "@api/services";
  import BaseInput from "@/components/common/BaseInput.vue";
  import BaseButton from "@/components/common/BaseButton.vue";
  const email = ref("");
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const emailReg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const validCheck = reactive({
    email: false,
  });
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message: string }>
  >;

  const emailValidCheck = (value: string) => {
    const test = emailReg.test(value);
    email.value = value;
    if (!test) {
      validCheck.email = true;
    } else {
      validCheck.email = false;
    }
  };

  const request = () => {
    if (email.value.trim().length == 0) {
      validCheck.email = true;
    }
    if (!validCheck.email) {
      defaultInstance
        .get(serviceAPI.changePassword + `?email=${email.value}`)
        .then((result) => {
          console.log(result);
          emitter.emit("update:alert", {
            isActive: true,
            message: "이메일로 발송되었습니다.",
          });
        })
        .catch((err) => {
          console.log(err);
          emitter.emit("update:alert", {
            isActive: true,
            message: "존재하지 않는 회원입니다.",
          });
        });
    }
  };
</script>

<style lang="scss" scope>
  .change-email-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    .guide-message {
      margin-top: 10px;
      color: red;
    }

    .base-button {
      margin-top: 20px;
    }
  }
</style>