<template>
  <main>
    <img src="@/assets/images/ai.gif" class="bg" />
    <component
      :is="currentComp"
      @update:route="
        (comp:string) => {
          console.log(comp);
          if (comp == 'SignUp') {
            currentComp = SignUp;
          }else if(comp == 'ChangePassword'){
            currentComp = ChangePassword;
          } else {
            currentComp = SignIn;
          }
        }
      "
    />
  </main>
</template>
<script setup lang="ts">
  import SignIn from "@/container/sign-in/SignIn.vue";
  import SignUp from "@pages/SignUp.vue";
  import ChangePassword from "./ChangePassword.vue";
  import { InstanceType } from "@axios/types";
  import { shallowRef } from "vue";
  const currentComp = shallowRef(SignIn);
</script>
<style scoped lang="scss">
  main {
    display: flex;
    column-gap: 60px;
    padding: 60px;
    height: 100%;
    box-sizing: border-box;
    .bg {
      width: 50%;
      object-fit: cover;
    }
  }
</style>
