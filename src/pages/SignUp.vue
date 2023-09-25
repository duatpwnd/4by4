<template>
  <form class="sign-up-form">
    <fieldset>
      <legend class="legend">Create an Account</legend>
      <div class="row">
        <button class="google-sign-up"></button>
      </div>
      <div class="row">
        <span class="or">OR Create Acount via Email</span>
      </div>
      <div class="row name-area">
        <div class="first-name-area">
          <label>First Name</label>
          <BaseInput
            type="text"
            @update:modelValue="(newValue:string) => (userFirstName = newValue)"
            :modelValue="userFirstName"
            placeholder="first name"
          />
        </div>
        <div class="last-name-area">
          <label>Last Name</label>
          <BaseInput
            type="text"
            @update:modelValue="(newValue:string) => (userLastName = newValue)"
            :modelValue="userLastName"
            placeholder="last name"
          />
        </div>
      </div>
      <div class="row">
        <label>Email Address</label>
        <BaseInput
          type="text"
          @update:modelValue="emailValidCheck"
          :modelValue="userEmail"
          placeholder="email"
        />
        <p class="guide-message" v-if="validCheck.email">
          올바른 이메일 형식을 입력해주세요.
        </p>
      </div>
      <div class="row">
        <label>Password</label>
        <BaseInput
          type="password"
          @update:modelValue="passwordValidCheck"
          :modelValue="userPassword"
          placeholder="password"
        />
        <p class="guide-message" v-if="validCheck.pw">
          8자이상 16자이하 영어,숫자를 혼용해서 입력해주세요 ㅡㅡ;;
        </p>
      </div>
      <div class="row">
        <label>Password Confirm</label>
        <BaseInput
          type="password"
          @update:modelValue="passwordConfirmValidCheck"
          :modelValue="userPasswordConfirm"
          placeholder="password confirm"
        />
        <p class="guide-message" v-if="validCheck.pwConfirm">
          비밀번호가 일치하지 않습니다.
        </p>
      </div>
      <div class="row">
        <BaseButton text="Create an Account" />
      </div>
    </fieldset>
  </form>
</template>
<script setup lang="ts">
  import { onMounted, ref, inject, reactive } from "vue";
  const userFirstName = ref("");
  const userLastName = ref("");
  const userEmail = ref("");
  const userPassword = ref("");
  const userPasswordConfirm = ref("");
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
  const emailReg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const validCheck = reactive({
    id: false,
    pw: false,
    email: false,
    pwConfirm: false,
  });
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
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .sign-up-form {
    width: 50%;
    fieldset {
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
          color: #ababab;
          width: 100%;
          text-align: center;
          display: block;
          &:after,
          &:before {
            content: "";
            width: calc(50% - 112px);
            display: inline-block;
            background: #ababab;
            height: 1px;
            vertical-align: middle;
          }
          &:before {
            margin-right: 20px;
          }
          &:after {
            margin-left: 20px;
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
