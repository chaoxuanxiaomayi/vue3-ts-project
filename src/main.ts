import { createApp } from "vue";
import router from "./router/index";
// import ElementPlus from "element-plus";
import { Size } from "./plugins/element";
import installElementPlus from "./plugins/element";

import * as elIcon from "@element-plus/icons-vue";
import App from "./App.vue";

// 初始化css 重置css默认样式
import "normalize.css/normalize.css";
// 全局 css
import "@/styles/index.scss";
import initSvgIcon from "./icons/index";
import store, { key } from "./store";


const size = store.state.app.size;

const app = createApp(App);
app.component("el-icon", elIcon);
app
  .use(store, key)
  .use(router)
  .use(installElementPlus,{
    size,zIndex:3000
  })
  .use(initSvgIcon)
  .mount("#app");
