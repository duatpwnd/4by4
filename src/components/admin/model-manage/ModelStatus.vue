<template>
  <keep-alive exclude="ModelSettings,ModelRegister">
    <component :is="currComp" />
  </keep-alive>
</template>
<script setup lang="ts">
  import { watchEffect, shallowRef, onDeactivated } from "vue";
  import ModelRegister from "./ModelRegister.vue";
  import ModelList from "./ModelList.vue";
  import ModelSettings from "./ModelSettings.vue";
  import { useRoute } from "vue-router";
  import { sseEvents } from "./model";
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
  onDeactivated(() => {
    console.log("이탈", sseEvents.value);
    // sseEvents.value!.close();
  });
</script>
<style scoped lang="scss"></style>
