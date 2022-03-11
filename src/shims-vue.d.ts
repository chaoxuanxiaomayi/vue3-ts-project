import { ElMessage, ElNotification, ElMessageBox } from "element-plus";
/// <reference types="vite/client" /> 
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $message: typeof ElMessage;
    $notify: typeof ElNotification;
    $confirm: typeof ElMessageBox.confirm;
    $alert: typeof ElMessageBox.alert;
    $prompt: typeof ElMessageBox.prompt;
  }
}

