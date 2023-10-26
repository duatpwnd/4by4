<template>
  <keep-alive exclude="ModelSettings">
    <component :is="currComp" />
  </keep-alive>
</template>
<script setup lang="ts">
  import { onMounted, watchEffect, shallowRef } from "vue";
  import ModelRegister from "./ModelRegister.vue";
  import ModelList from "./ModelList.vue";
  import ModelSettings from "./ModelSettings.vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  const currComp = shallowRef(ModelList);
  watchEffect(() => {
    if (route.query.subCategory == "modelStatus") {
      const type = route.query.type;
      if (type == "register") {
        currComp.value = ModelRegister;
      } else if (type == "settings") {
        currComp.value = ModelSettings;
      } else {
        currComp.value = ModelList;
      }
    }
  });
  onMounted(() => {
    console.log("onmounted호출");
  });
</script>
<style scoped lang="scss"></style>
