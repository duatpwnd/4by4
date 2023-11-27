/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "vue3-spinner";
declare module "swiper/modules";
declare module "@uppy/*";
declare module "vue-follow-tooltip";
declare module "vue-uuid";
declare module "event-source-polyfill";
