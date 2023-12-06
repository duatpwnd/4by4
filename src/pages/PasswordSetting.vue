<template>
  <div class="change-password-wrapper">
    <label class="title">Password</label>
    <BaseInput
      @update:modelValue="passwordValidCheck"
      :modelValue="password"
      type="password"
      placeholder=""
    />
    <p class="guide-message" v-if="validCheck.password">
      Please enter between 8 and 16 characters using a mixture of English and
      numbers.
    </p>
    <label class="title">Password Confirm</label>
    <BaseInput
      @update:modelValue="passwordConfirmValidCheck"
      :modelValue="passwordConfirm"
      type="password"
      placeholder=""
    />
    <p class="guide-message" v-if="validCheck.passwordConfirm">
      Passwords do not match.
    </p>
    <BaseButton type="button" text="Change password" @click="submit" />
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, inject } from "vue";
  import { AxiosInstance } from "axios";
  import { EventType, Emitter } from "mitt";
  import { useRoute, useRouter } from "vue-router";
  import serviceAPI from "@api/services";

  const authInstance = inject("authInstance") as AxiosInstance;
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive: boolean;
        message?: string;
        fn?: () => void;
        closeFn?: () => void;
      }
    >
  >;
  const emit = defineEmits(["update:route"]);

  const route = useRoute();
  const router = useRouter();
  const code = route.params.code;
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  const password = ref("");
  const passwordConfirm = ref("");
  const validCheck = reactive({
    password: false,
    passwordConfirm: false,
  });
  const passwordValidCheck = (value: string) => {
    const test = pwReg.test(value);
    password.value = value;
    if (!test) {
      validCheck.password = true;
    } else {
      validCheck.password = false;
    }
  };
  const passwordConfirmValidCheck = (value: string) => {
    passwordConfirm.value = value;
    if (password.value !== passwordConfirm.value) {
      validCheck.passwordConfirm = true;
    } else {
      validCheck.passwordConfirm = false;
    }
  };

  const submit = () => {
    if (password.value.trim().length == 0) {
      validCheck.password = true;
    }
    if (passwordConfirm.value.trim().length == 0) {
      validCheck.passwordConfirm = true;
    }
    if (!validCheck.password && !validCheck.passwordConfirm) {
      authInstance
        .patch(
          serviceAPI.requestPasswordChange +
            `?code=${code}&password=${password.value}`
        )
        .then((result) => {
          console.log(result);
          emitter.emit("update:alert", {
            isActive: true,
            message: "비밀번호 변경이 완료되었습니다.",
            closeFn: () => {
              router.push("/sign-in");
            },
          });
        });
    }
  };
</script>

<style lang="scss" scoped>
  .change-password-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    border: 1px solid rgb(216, 222, 228);
    border-radius: 6px;
    padding: 60px;
    box-sizing: border-box;
    .title {
      margin-bottom: 20px;
      display: block;
      font: {
        weight: bold;
        size: 20px;
      }
    }
    .base-input {
      margin-bottom: 20px;
    }
    .guide-message {
      margin-bottom: 20px;
      color: red;
    }
  }
</style>
