import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import app, { IAppState } from "@/store/modules/app";
import getters from "./getters"; // 导入getters
import createPersistedState from "vuex-persistedstate";

// 声明全局状态类型，主要就是我们定义的模块 这样store.state.app才会有类型提示
export interface IRootState {
  app: IAppState;
}
export const key: InjectionKey<Store<IRootState>> = Symbol();
const persisteAppState = createPersistedState({
  storage: window.sessionStorage,
  key: "vue-app",
  paths: ["app.sidebar.opened",'app.size'], // 通过点连接符指定state路径
});
export default createStore<IRootState>({
  plugins: [
    persisteAppState,
    // persisteTestState // 只是测试多模块持久化
  ],
  getters,
  modules: {
    // 注册模块
    app,
  },
});

export function useStore() {
  return baseUseStore(key);
}
// export default createStore({
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       return state.count++;
//     },
//   },
//   actions: {
//     increment(context) {
//       context.commit("increment");
//     },
//   },
// });
