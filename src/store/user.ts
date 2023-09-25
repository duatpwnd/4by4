import { defineStore } from "pinia";
import { reactive } from "vue";
export const useUserStore = defineStore("user", () => {
  const user = reactive({});
  const putUserInfo = (payload: any) => {
    Object.assign(user, payload);
  };
  return { user, putUserInfo };
});
