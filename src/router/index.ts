import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import { inject } from "vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "@pages/SignInView.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import(/* webpackChunkName: "main" */ "@pages/Main.vue"),
  },
  {
    path: "/admin",
    name: "admin",
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
  const signOut = inject("signOut");
  // console.log(cookies.get("accessToken"));
  next();
});
export default router;
