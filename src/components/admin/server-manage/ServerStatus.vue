<template>
  <keep-alive>
    <component :is="currComp" />
  </keep-alive>
</template>
<script setup lang="ts">
  import { onMounted, watchEffect, shallowRef } from "vue";
  import { defineAsyncComponent } from "vue";
  import { DotLoader } from "vue3-spinner";
  import ServerRegister from "./ServerRegister.vue";
  import ServerSettings from "./ServerSettings.vue";
  import ServerList from "./ServerList.vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  const currComp = shallowRef();

  watchEffect(() => {
    const type = route.query.type;
    if (type == "register") {
      currComp.value = ServerRegister;
    } else if (type == "settings") {
      currComp.value = ServerSettings;
    } else {
      currComp.value = ServerList;
    }
  });
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss">
  .v-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
  }
</style>
