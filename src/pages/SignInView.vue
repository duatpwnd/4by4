<template>
  <main>
    <img src="https://th.bing.com/th/id/OIG.lVXjWwlHyIo4QdjnC1YE" class="bg" />
    <component
      :is="currentComp"
      @update:route="
        (comp:string) => {
          console.log(comp);
          if (comp == 'SignUp') {
            currentComp = SignUp;
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
  import { InstanceType } from "@axios/types";
  import { onMounted, inject, ref, watch, shallowRef } from "vue";
  import { useRouter, useRoute } from "vue-router";
  const currentComp = shallowRef(SignIn);
  const route = useRoute();
  const authInstance = inject("authInstance");
  watch(route, (curr, prev) => {
    console.log(curr, prev);
  });
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
