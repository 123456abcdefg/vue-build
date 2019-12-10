<template>
    <div>
      <el-container class="contaniner_content">
        <el-header style="padding:0;">
          <top-bar></top-bar>
        </el-header>
        <el-container style="overflow:hidden;">
          <el-aside style="width:175px;position:relative;">
              <side-bar></side-bar>
          </el-aside>
          <el-main class="mainStyle">
            <keep-alive include="log">
              <router-view id="main-content-value" class="page-component-wrap animated fadeIn"></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
import TopBar from '../components/topBar'
import SideBar from '../components/siderBar'
let common = {
    state: {
        isCollapse: false,
        chartTheme: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089"],
    },
    mutations: {
        toggleSiderBar(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}
export default {
  name: 'layout',
  computed: {
    isCollapse() {
      return common.isCollapse
    }
  },
  data(){
    return {
      fullHeight: document.documentElement.offsetHeight
    }
  },
  components: {
    'top-bar': TopBar,
    'side-bar': SideBar
  },
  watch:{

  },
  mounted(){

  },
}
</script>
<style lang="scss" scoped>
.contaniner_content{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
.mainStyle{
  background-color: #f3f6f8;
  display: flex;
  justify-content: center;
  #main-content-value{
    width: 97%;
  }
}
</style>
