<template>
  <div class="navbar">
    <hambuger @toggleClick="toggleSidebar" :is-active="true" />
    <breadcrumb />
    <div class="right-menu">
      <!-- 全屏 -->
      <screenfull id="screefull" class="right-menu-item hover-effect" />
       <!-- element组件size切换 -->
      <el-tooltip content="Global Size" effect="dark" placement="bottom">
        <size-select class="right-menu-item hover-effect" />
      </el-tooltip>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import Hambuger from "@/components/Hambuger/index.vue";
import Screenfull from '@/components/Screenfull/index.vue'

import SizeSelect from '@/components/SizeSelect/index.vue'


import { useStore } from "@/store/index";

export default defineComponent({
  name: "Navbar",
  components: {
    Breadcrumb,
    Hambuger,
    Screenfull,
    SizeSelect
  },
  setup() {
    const store = useStore();
    const toggleSidebar = () => {
      console.log("click");
      store.dispatch("app/toggleSidebar");
    };
    const sidebar = computed(() => store.getters.sidebar);

    return {
      toggleSidebar,
      sidebar,
    };
  },
});
</script>
<style lang="scss">
  .navbar {
    display: flex;
    .right-menu {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 15px;
    }
  }
</style>