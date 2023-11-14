<template>
  <form class="sign-in-form">
    <fieldset>
      <legend class="legend">PIXELL AI</legend>
      <div class="row">
        <BaseInput
          type="text"
          @update:enterEvent="signIn"
          @update:modelValue="(newValue:string) => (userId = newValue)"
          :modelValue="userId"
          placeholder="ID"
        />
        <p v-if="validCheck.id" class="guide-message">Please enter your ID.</p>
      </div>
      <div class="row">
        <BaseInput
          type="password"
          @update:enterEvent="signIn"
          @update:modelValue="(newValue:string) => {
            userPw = newValue;
          }"
          :modelValue="userPw"
          placeholder="Password"
        />
        <p v-if="validCheck.pw" class="guide-message">
          Please enter a password.
        </p>
      </div>
      <div class="row">
        <BaseButton text="Log In" @click="signIn" />
      </div>
      <div class="row">
        <span class="or">OR</span>
      </div>
      <div class="row">
        <div class="google-sign-in-area">
          <button type="button" class="google-sign-in" @click="googleSignIn">
            Continue with Google
          </button>
        </div>
      </div>
      <div class="row">
        <button
          type="button"
          class="find-password-link"
          @click="emit('update:route', 'ChangePassword')"
        >
          Forget password?
        </button>
      </div>
      <div class="row">
        <span class="question-txt">Don’t Have a Acount?</span>
        <button
          type="button"
          class="sign-up-link"
          @click="emit('update:route', 'SignUp')"
        >
          Sign Up
        </button>
      </div>
    </fieldset>
  </form>
</template>
<script setup lang="ts">
  import { onMounted, reactive, ref, inject } from "vue";
  import { AxiosInstance } from "axios";
  import { useRouter, useRoute } from "vue-router";
  import serviceAPI from "@api/services";
  import authAPI from "@api/auth";
  import { useUserStore } from "@/store/user";
  import { googleTokenLogin } from "vue3-google-login";
  import { useCookies } from "vue3-cookies";
  import { EventType, Emitter } from "mitt";
  const emit = defineEmits(["update:route"]);
  const { cookies } = useCookies();
  const router = useRouter();
  const route = useRoute();
  const code = route.params.code;
  const userStore = useUserStore();
  const defaultInstance = inject("defaultInstance") as AxiosInstance;
  const userId = ref("");
  const userPw = ref("");
  const referrer = route.query.referrer as string | undefined;
  const validCheck = reactive({
    id: false,
    pw: false,
  });
  const emitter = inject("emitter") as Emitter<
    Record<EventType, { isActive: boolean; message: string }>
  >;

  const googleSignIn = () => {
    googleTokenLogin().then((response) => {
      console.log(response);
      defaultInstance
        .get(authAPI.googleLogin, {
          headers: {
            token: response.token_type + " " + response.access_token,
          },
        })
        .then((result) => {
          console.log(result);
          cookies.set("token", result.data.data);
          userStore.putUserInfo({
            token: result.data.data,
          });
          router.push("/main");
        });
    });
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
    if (!validCheck.id && !validCheck.pw) {
      defaultInstance
        .get(authAPI.login, {
          headers: {
            userId: userId.value,
            password: userPw.value,
          },
        })
        .then((result) => {
          cookies.set("token", result.headers.authorization);
          userStore.putUserInfo({
            token: result.headers.authorization,
          });
          console.log(`output->referrer`, referrer);
          if (referrer == undefined) {
            router.push("/main");
          } else {
            router.push(`/${referrer}`);
          }
        })
        .catch((err: Error) => {
          emitter.emit("update:alert", {
            isActive: true,
            message: "Please enter your ID or password correctly.",
          });
        });
    }
  };
  // 회원가입을 위한 로직
  const successSignUp = () => {
    defaultInstance
      .patch(serviceAPI.userJoin + `?mailConfirmCode=${code}`)
      .then((result) => {
        console.log(result);
        emitter.emit("update:alert", {
          isActive: true,
          message: "Sign up is complete.",
        });
        router.push("/sign-in");
      });
  };
  onMounted(() => {
    // 회원가입일 경우
    if (code.length == 1) {
      successSignUp();
    }
  });
</script>
<style scoped lang="scss">
  .sign-in-form {
    width: 50%;
    overflow-y: auto;
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
