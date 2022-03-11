import { createApp } from "vue";
import router from "./router/index";
// import ElementPlus from "element-plus";
import  { Size } from "./plugins/element";
import installElementPlus from './plugins/element';


import App from "./App.vue";
import store from "./store";

// 初始化css 重置css默认样式
import "normalize.css/normalize.css";
// 全局 css
import "@/styles/index.scss";
import initSvgIcon from "./icons/index";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(installElementPlus)
  .use(initSvgIcon)
  .mount("#app");

