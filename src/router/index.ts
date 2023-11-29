import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import { inject } from "vue";
import { EventType, Emitter } from "mitt";
import { useUserStore } from "@/store/user";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/sign-in/:code(.*)*", // 로그인
    name: "signIn",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "@pages/SignInView.vue"),
  },
  {
    path: "/main", // 추론 영상 페이지
    name: "main",
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "main" */ "@pages/Main.vue"),
  },
  {
    path: "/password-setting/:code(.*)", // 비밀번호 변경
    name: "passwordSetting",
    component: () =>
      import(/* webpackChunkName: "main" */ "@pages/PasswordSetting.vue"),
  },
  {
    path: "/admin", // 관리자
    name: "admin",
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "admin" */ "@pages/Admin.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition != null) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            left: 0,
            top: (savedPosition as { [key: string]: any }).top,
          });
        }, 500);
      });
    }
  },
});
router.beforeEach((to, from, next) => {
  const token = cookies.get("token");
  if (to.path === "/sign-in") {
    // 로그인 된 상태에서 로그인 페이지로 접속 시도 할 경우 리다이렉트 시키기.
    if (token) {
      return next({ path: "/main" });
    } else {
      next();
    }
  } else if (token) {
    const userStore = useUserStore();
    userStore.putUserInfo({
      token: token,
    });

    if (to.path === "/") {
      return next({ path: "/" });
    } else {
      next();
    }
  } else {
    // 토큰이 없는 상태에서 인증이 필요한 페이지에 접속시도 할 경우 로그인 페이지로 리다이렉트 시키기.
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      const emitter = inject("emitter") as Emitter<
        Record<
          EventType,
          { isLoading?: boolean; isActive?: boolean; message?: string }
        >
      >;
      // emitter.emit("update:alert", {
      //   isActive: true,
      //   message: "Please log in.",
      // });

      return next({ path: "/sign-in" });
    } else {
      return next();
    }
  }
});
export default router;
