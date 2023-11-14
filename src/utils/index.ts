import { authInstance, defaultInstance } from "@axios/instance";
import mitt from "mitt";
import { App } from "vue";
import router from "@/router/index";
import { useCookies } from "vue3-cookies";
import { useUserStore } from "@store/user";
import BaseButton from "@components/common/BaseButton.vue";
import BaseInput from "@components/common/BaseInput.vue";
import BaseSelect from "@components/common/BaseSelect.vue";
import BaseCheckBox from "@components/common/BaseCheckBox.vue";
import BaseRadio from "@components/common/BaseRadio.vue";
import BaseProgress from "@components/common/BaseProgress.vue";
import BaseTable from "@components/common/BaseTable.vue";
const { cookies } = useCookies();
export default {
  install: (app: App) => {
    const emitter = mitt();
    const userStore = useUserStore();
    const globalComponent = [
      BaseButton,
      BaseInput,
      BaseSelect,
      BaseCheckBox,
      BaseRadio,
      BaseProgress,
      BaseTable,
    ];
    globalComponent.forEach((el) => {
      if (el.__name) {
        app.component(el.__name, el);
      }
    });
    const signOut = () => {
      cookies.remove("token");
      userStore.putUserInfo(null);
      router.push(`/sign-in?referrer=${location.pathname.split("/").pop()}`);
      emitter.emit("update:alert", {
        isActive: true,
        message: "Logout has been processed.",
      });
    };
    app.provide("emitter", emitter);
    app.provide("authInstance", authInstance);
    app.provide("defaultInstance", defaultInstance);
    app.provide("signOut", signOut);
  },
};
