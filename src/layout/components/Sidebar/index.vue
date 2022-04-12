<template>
  <div>
    <!-- 测试展开收起 -->
    <h6
      @click="isCollapse = !isCollapse"
      style="color: #fff; text-align: center; font-size: 14px"
    >
      {{ isCollapse ? "展开" : "收起" }}
    </h6>

    <el-menu
      class="sidebar-container-menu"
      mode="vertical"
      :default-active="activeMenu"
      :background-color="scssVariables.menuBg"
      :text-color="scssVariables.menuText"
      :active-text-color="scssVariables.menuActiveText"
      :collapse="isCollapse"
      :collapse-transition="true"
    >
      <sidebar-item
        v-for="route in menuRoutes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
        :isCollapse="isCollapse"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute } from "vue-router";
import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem.vue";
import { routes } from "@/router";
import { useStore } from '@/store'


export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const activeMenu = computed(() => {
      const { path } = route;
      return path;
    });
    const scssVariables = computed(() => variables);
    const isCollapse = computed(() => !store.getters.sidebar.opened);

    const menuRoutes = computed(() => routes);
    console.log(routes, "routes");
    return {
      scssVariables,
      isCollapse,
      activeMenu,
      menuRoutes,
    };
  },
};
</script>
