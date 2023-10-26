<template>
  <keep-alive exclude="ServerSettings">
    <component :is="currComp" />
  </keep-alive>
</template>
<script setup lang="ts">
  import { watchEffect, shallowRef } from "vue";
  import ServerRegister from "./ServerRegister.vue";
  import ServerSettings from "./ServerSettings.vue";
  import ServerList from "./ServerList.vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  const currComp = shallowRef();

  watchEffect(() => {
    if (route.query.subCategory == "serverStatus") {
      const type = route.query.type;
      if (type == "register") {
        currComp.value = ServerRegister;
      } else if (type == "settings") {
        currComp.value = ServerSettings;
      } else {
        currComp.value = ServerList;
      }
    }
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
