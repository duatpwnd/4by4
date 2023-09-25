<template>
  <keep-alive>
    <component :is="currComp" />
  </keep-alive>
</template>
<script setup lang="ts">
  import { onMounted, watchEffect, shallowRef } from "vue";
  import DeployRegister from "./DeployRegister.vue";
  import DeployList from "./DeployList.vue";
  import DeploySettings from "./DeploySettings.vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  const currComp = shallowRef(DeployList);
  watchEffect(() => {
    const type = route.query.type;
    if (type == "register") {
      currComp.value = DeployRegister;
    } else if (type == "settings") {
      currComp.value = DeploySettings;
    } else {
      currComp.value = DeployList;
    }
  });
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss"></style>
