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
  </div>
</template>

<script>
import { getCurrentInstance, defineComponent } from "vue";
export default defineComponent({
  name: "Dashboard",
  setup() {
    const { proxy } = getCurrentInstance();
    const sayHi = () => {
      proxy?.$message.success("click me ")
    };
    return {
      sayHi,
    };
  },
});
</script>
.custom-class { // 自定义样式404 font-size: 200px; color: green; }
