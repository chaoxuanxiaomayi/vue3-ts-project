<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar/>
    </div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">
          <NavBar/>
        </div>
        <div class="tags-view">tagsview</div>
      </div>
      <!-- <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div> -->
      <app-main />
    </div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar/index.vue'
import AppMain from "./components/AppMain.vue"
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    Sidebar,
    AppMain,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: cyan;
      .navbar {
        height: 50px;
        background: #1890ff;
        width: 100%;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /* 50= navbar  50  如果有tagsview + 34  */
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
