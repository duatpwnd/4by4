<template>
  <form
    class="sign-up-form"
    @keydown="
      (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
        }
      }
    "
  >
    <fieldset>
      <button
        class="close-btn"
        @click="emit('update:route', 'SignIn')"
      ></button>
      <legend class="legend">Create an Account</legend>
      <!-- <div class="row">
        <button class="google-sign-up"></button>
        <FontAwesomeIcon
          icon="xmark"
          class="close-button"
          @click="emit('update:route', 'SignIn')"
        />
      </div> -->
      <!-- <div class="row">
        <span class="or">OR Create Account via Email</span>
      </div> -->
      <div class="row name-area">
        <div class="first-name-area">
          <label>First Name</label>
          <BaseInput
            type="text"
            @update:modelValue="firstNameCheck"
            @update:enterEvent="signUp"
            :modelValue="userFirstName"
            placeholder="first name"
          />
          <p class="guide-message" v-if="validCheck.firstName">
            Please enter your first name.
          </p>
        </div>
        <div class="last-name-area">
          <label>Last Name</label>
          <BaseInput
            type="text"
            @update:modelValue="lastNameCheck"
            @update:enterEvent="signUp"
            :modelValue="userLastName"
            placeholder="last name"
          />
          <p class="guide-message" v-if="validCheck.lastName">
            Please enter your last name.
          </p>
        </div>
      </div>
      <div class="row">
        <label>Email Address</label>
        <BaseInput
          type="text"
          @update:modelValue="emailValidCheck"
          @update:enterEvent="signUp"
          :modelValue="userEmail"
          placeholder="email"
        />
        <p class="guide-message" v-if="validCheck.email">
          Please enter the correct email format.
        </p>
      </div>
      <div class="row">
        <label>Password</label>
        <BaseInput
          type="password"
          @update:modelValue="passwordValidCheck"
          @update:enterEvent="signUp"
          :modelValue="userPassword"
          placeholder="password"
        />
        <p class="guide-message" v-if="validCheck.pw">
          Please enter between 8 and 16 characters using a mixture of English
          and numbers.
        </p>
      </div>
      <div class="row">
        <label>Confirm Password</label>
        <BaseInput
          type="password"
          @update:modelValue="passwordConfirmValidCheck"
          @update:enterEvent="signUp"
          :modelValue="userPasswordConfirm"
          placeholder="Confirm Password"
        />
        <p class="guide-message" v-if="validCheck.pwConfirm">
          Passwords do not match.
        </p>
      </div>
      <div class="row">
        <BaseButton text="Create an Account" @click="signUp" />
      </div>
    </fieldset>
  </form>
</template>
<script setup lang="ts">
  import { ref, inject, reactive } from "vue";
  import { AxiosInstance } from "axios";
  import { EventType, Emitter } from "mitt";
  import authAPI from "@api/auth";
  const userFirstName = ref("");
  const userLastName = ref("");
  const userEmail = ref("");
  const userPassword = ref("");
  const userPasswordConfirm = ref("");
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  const emailReg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const authInstance = inject("authInstance") as AxiosInstance;
  const emitter = inject("emitter") as Emitter<
    Record<
      EventType,
      {
        isActive?: boolean;
        isLoading?: boolean;
        message?: string;
        fn?: () => void;
        closeFn?: () => void;
      }
    >
  >;
  const emit = defineEmits(["update:route"]);
  const validCheck = reactive({
    firstName: false,
    lastName: false,
    pw: false,
    email: false,
    pwConfirm: false,
  });
  const firstNameCheck = (value: string) => {
    userFirstName.value = value;
    if (userFirstName.value.trim().length > 0) {
      validCheck.firstName = false;
    } else {
      validCheck.firstName = true;
    }
  };
  const lastNameCheck = (value: string) => {
    userLastName.value = value;
    if (userLastName.value.trim().length > 0) {
      validCheck.lastName = false;
    } else {
      validCheck.lastName = true;
    }
  };

  const emailValidCheck = (value: string) => {
    const test = emailReg.test(value);
    userEmail.value = value;
    if (!test) {
      validCheck.email = true;
    } else {
      validCheck.email = false;
    }
  };
  const passwordValidCheck = (value: string) => {
    const test = pwReg.test(value);
    userPassword.value = value;
    if (!test) {
      validCheck.pw = true;
    } else {
      validCheck.pw = false;
    }
  };
  const passwordConfirmValidCheck = (value: string) => {
    userPasswordConfirm.value = value;
    if (userPassword.value !== userPasswordConfirm.value) {
      validCheck.pwConfirm = true;
    } else {
      validCheck.pwConfirm = false;
    }
  };
  const signUp = () => {
    if (userFirstName.value.trim().length == 0) {
      validCheck.firstName = true;
    }
    if (userLastName.value.trim().length == 0) {
      validCheck.lastName = true;
    }
    if (userEmail.value.trim().length == 0) {
      validCheck.email = true;
    }
    if (userPassword.value.trim().length == 0) {
      validCheck.pw = true;
    }
    if (userPasswordConfirm.value.trim().length == 0) {
      validCheck.pwConfirm = true;
    }
    if (Object.values(validCheck).indexOf(true) == -1) {
      emitter.emit("update:loading", { isLoading: true });
      authInstance
        .post(authAPI.join, {
          firstName: userFirstName.value,
          lastName: userLastName.value,
          password: userPassword.value,
          email: userEmail.value,
          role: "user",
          host: location.host,
        })
        .then((result) => {
          console.log(result);
          if ("data" in result.data) {
            emitter.emit("update:loading", { isLoading: false });
            emitter.emit("update:alert", {
              isActive: true,
              message: "회원가입이 완료되었으며, 인증 메일이 발송되었습니다.",
              closeFn: () => {
                emit("update:route", "SignIn");
              },
            });
          }
        })
        .catch((err) => {
          emitter.emit("update:loading", { isLoading: false });
          emitter.emit("update:alert", {
            isActive: true,
            message: err.response.data.message,
          });
        });
    }
  };
</script>
<style scoped lang="scss">
  .sign-up-form {
    width: 50%;
    overflow-y: auto;
    fieldset {
      position: relative;
      .close-btn {
        @include background("close_ico.svg", 25px, 25px, center);
        width: 25px;
        height: 25px;
        position: absolute;
        top: -25px;
        right: 0px;
      }

      .legend {
        font: {
          size: 25px;
          weight: 700;
        }
        width: 100%;
        box-sizing: border-box;
        text-align: center;
      }
      .row {
        margin-top: 22px;
        position: relative;
        .close-button {
          position: absolute;
          top: 0;
          right: 0;
          height: 58px;
          cursor: pointer;
        }
        label {
          margin-bottom: 10px;
          display: inline-block;
        }
        .guide-message {
          margin-top: 10px;
          color: red;
        }

        .google-sign-up {
          width: 20px;
          height: 20px;
          margin: 0 auto;
          padding: 28px;
          display: block;
          box-sizing: border-box;
          border: 1px solid #e7e7e7;
          border-radius: 12px;
          @include background("google_ico.svg", 20px, 20px, center);
        }
        .or {
          font: {
            size: 15px;
            weight: 700;
          }
          white-space: nowrap;
          display: flex;
          color: #ababab;
          width: 100%;
          text-align: center;
          justify-content: space-between;
          column-gap: 20px;
          &:after,
          &:before {
            content: "";
            width: 100%;
            background: #ababab;
            height: 1px;
            align-self: center;
          }
        }
      }
      .name-area {
        display: flex;
        column-gap: 14px;
        justify-content: space-between;
        .first-name-area,
        .last-name-area {
          width: 50%;
        }
      }
    }
  }
</style>
