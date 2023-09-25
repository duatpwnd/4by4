<template>
  <form class="sign-in-form">
    <fieldset>
      <legend class="legend">PIXELL AI</legend>
      <div class="row">
        <BaseInput
          type="text"
          @update:modelValue="(newValue:string) => (userId = newValue)"
          :modelValue="userId"
          placeholder="ID"
        />
        <p v-if="validCheck.id" class="guide-message">아이디를 입력해주세요.</p>
      </div>
      <div class="row">
        <BaseInput
          type="password"
          @update:modelValue="(newValue:string) => (userPw = newValue)"
          :modelValue="userPw"
          placeholder="Password"
        />
        <p v-if="validCheck.pw" class="guide-message">
          비밀번호를 입력해주세요.
        </p>
      </div>
      <div class="row">
        <BaseButton text="Log In" @click="signIn" />
      </div>
      <div class="row">
        <span class="or">OR</span>
      </div>
      <div class="row">
        <!-- <div class="google-sign-in-area">
          <button type="button" class="google-sign-in" @click="googleSignIn">
            Continue with Google
          </button>
        </div> -->
        <GoogleLogin :callback="callback" prompt auto-login />
      </div>
      <div class="row">
        <router-link to="/find-password" class="find-password-link"
          >Forget password?</router-link
        >
      </div>
      <div class="row">
        <span class="question-txt">Don’t Have a Acount?</span>
        <button class="sign-up-link" @click="emit('update:route')">
          Sign Up
        </button>
      </div>
    </fieldset>
  </form>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref, inject } from "vue";
  import { AxiosInstance } from "axios";
  import { useRouter } from "vue-router";
  import auth from "@api/auth";
  import { useUserStore } from "@/store/user";
  import type { CallbackTypes } from "vue3-google-login";
  import {
    googleAuthCodeLogin,
    googleTokenLogin,
    decodeCredential,
  } from "vue3-google-login";
  import { useCookies } from "vue3-cookies";
  import { googleSdkLoaded } from "vue3-google-login";
  const emit = defineEmits(["update:route"]);
  const { cookies } = useCookies();
  const router = useRouter();
  const userStore = useUserStore();
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const userId = ref("");
  const userPw = ref("");
  const validCheck = reactive({
    id: false,
    pw: false,
  });
  const googleSignIn = () => {
    googleTokenLogin().then((response) => {
      console.log(response);
      console.log(
        "Handle the response",
        response.token_type + " " + response.access_token
      );
      const userData = decodeCredential(
        response.token_type + "" + response.access_token
      );
      console.log(userData);
    });
    // googleSdkLoaded((google) => {
    //   google.accounts.oauth2
    //     .initCodeClient({
    //       client_id:
    //         "79754581908-ck8bsqf8bje473f2agm0omubc6voskjb.apps.googleusercontent.com",
    //       scope: "email profile openid",
    //       redirect_uri: "http://localhost:5173/main",
    //       callback: (response) => {
    //         console.log(response);
    //         if (response.code) {
    //           sendCodeToBackend(response.code);
    //         }
    //       },
    //     })
    //     .requestCode();
    // });
  };
  const sendCodeToBackend = (code: string) => {
    try {
      // const headers = {
      //   Authorization: code,
      // };
      // const response = await axios.post("http://localhost:4000/auth", null, {
      //   headers,
      // });
      // const userDetails = response.data;
      // console.log("User Details:", userDetails);
      // this.userDetails = userDetails;
      // Redirect to the homepage ("/")
      //this.$router.push("/rex");
    } catch (error) {
      console.error("Failed to send authorization code:", error);
    }
  };
  const callback: CallbackTypes.CredentialCallback = (response) => {
    // decodeCredential will retrive the JWT payload from the credential
    const userData = decodeCredential(response.credential);
    console.log("Handle the userData", userData);
  };
  const signIn = () => {
    if (userId.value.trim().length == 0) {
      validCheck.id = true;
    } else {
      validCheck.id = false;
    }
    if (userPw.value.trim().length == 0) {
      validCheck.pw = true;
    } else {
      validCheck.pw = false;
    }
    if (validCheck.id && validCheck.pw) {
      defaultInstance
        .post(auth.signIn, { id: userId.value, pw: userPw.value })
        .then((result) => {
          console.log(result);
          // userStore.putUserInfo({ name: "duatpwnd" });
          // router.push("/main");
        });
    }
  };
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .sign-in-form {
    width: 50%;
    fieldset {
      height: 100%;
      .legend {
        padding: 50px;
        width: 100%;
        box-sizing: border-box;
        font: {
          size: 50px;
          weight: 700;
        }
        text-align: center;
      }
      .row {
        &:not(:first-of-type) {
          margin-top: 22px;
        }
        .g-btn-wrapper {
          display: block;
          text-align: center;
        }
        .guide-message {
          margin-top: 10px;
          color: red;
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
            width: calc(50% - 30px);
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
        .google-sign-in-area {
          border: 1px solid #e7e7e7;
          width: 300px;
          box-sizing: border-box;
          margin: 0 auto;
          padding: 14px 0;
          border-radius: 12px;
          text-align: center;
          .google-sign-in {
            font-weight: 700;
            @include background("google_ico.svg", 20px, 20px, left);
            padding-left: 36px;
          }
        }
        .sign-up-link {
          margin-left: 10px;
          font-weight: 700;
          color: #666;
          border-bottom: 1px solid #666;
        }
        .find-password-link {
          width: 100%;
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
