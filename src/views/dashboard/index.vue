<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon icon-class="bug"></svg-icon>
    <svg-icon
      icon-class="404"
      class-name="custom-class"
      @click="sayHi"
    ></svg-icon>
    <p @click="sayHi">www</p>

    <input type="text" />缓存测试


     <el-button type="primary" @click="setSize">size改变</el-button>
  </div>
</template>

<script>
import { getCurrentInstance, defineComponent } from "vue";
import {useStore} from "@/store"
export default defineComponent({
  name: "Dashboard",
  setup() {
    const { proxy } = getCurrentInstance();
    const sayHi = () => {
      proxy?.$message.success("click me ")
    };
    const store = useStore()
    const setSize =()=>{
    store.dispatch("app/setSize","small")
    }
    return {
      sayHi,
      setSize
    };
  },
});
</script>
.custom-class { // 自定义样式404 font-size: 200px; color: green; }
