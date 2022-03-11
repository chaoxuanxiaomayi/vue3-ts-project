import { applyStyles } from "@popperjs/core";
import "dayjs/locale/zh-cn";
import locale, {
  ElButton,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
} from "element-plus";
import "element-plus/dist/index.css";
// import "element-plus/lib/theme-chalk/index.css";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import { App } from "vue";
export type Size = "default" | "small" | "large" | "medium";

export default (app: App): void => {
  app.use(ElementPlus, {
    locale: zhCn,
  });
  const components = [
    ElButton,
    ElMessage,
    ElNotification,
    ElMessageBox,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
  ];
  components.forEach((component) => {
    app.use(component);
  });

  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$notify = ElNotification;
  app.config.globalProperties.$confirm = ElMessageBox.confirm;
  app.config.globalProperties.$alert = ElMessageBox.alert;
  app.config.globalProperties.$prompt = ElMessageBox.prompt;

  // element-plus全局配置
  // 说明文档：https://element-plus.gitee.io/#/zh-CN/component/quickstart#quan-ju-pei-zhi
  // 该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸 small，zIndex 设置弹框的初始 z-index（默认值：2000）。
  app.config.globalProperties.$ELEMENT = {
    size: "medium",
    // zIndex: 2000 弹框zIndex默认值：2000
  };
};
