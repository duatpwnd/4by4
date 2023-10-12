import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
  const user = ref<null | { [key: string]: any }>(null);
  const putUserInfo = (payload: { [key: string]: any } | null) => {
    user.value = payload;
  };
  return { user, putUserInfo };
});
