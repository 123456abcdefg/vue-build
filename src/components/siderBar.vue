<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
    <div id="sidebar-wrap">
        <el-menu style="width:175px;" background-color="#324157" text-color="#ddd" :default-active="$route.path" :unique-opened="isUnique" :router="isRouter" mode="vertical">
            <template v-for="item in navData">
                <el-submenu v-if="item.children.length !== 0" :index="item.router" :key="item.router">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :index="child.router" :key="child.router">
                        <i :class="child.icon"></i>
                        <span slot="title">{{child.name}}</span>
                    </el-menu-item>
                </el-submenu>

                <el-menu-item :index="item.router" :key="item.router" v-else>
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script>
import {navdataa} from "../config/navData";
export default {
  name: "sidebar",
  data() {
    return {
      isMusicOn: false,
      isUnique: true,
      isRouter: true,
      navData:[],
    };
  },
  computed: {
    // langType() {
    //   return this.$i18n.locale;
    // }
  },
  created() {
  },
  mounted(){
    this.navData = navdataa.list;
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
#sidebar-wrap {
  width: 175px;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 4;

  /* 图标动画 */
  .imgWrap {
    text-align: center;
    position: absolute;
    bottom: 30px;
    width: 100%;
    .gif {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .logo {
    color: #fff;
    width:335px;
    text-align: center;
    background: #4D74FF;
    padding:0;
    margin: 0;
    height:60px;
    line-height:60px;
    display: flex;
    img{
        margin: 12px 6px 0 20px;
        display: inline-block;
        width: 37px;
        height: 37px;
    }
  }
}

// 动态改变左侧导航包裹层宽度
#sidebar-wrap.collapsed {
  width: 64px;
}
.el-menu {
  height: 100%;
  width: 175px;
}

// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 20px !important;
}

// 改变元素属性，要不动画效果不管用，是不是很厉害啊？哈哈哈
.rythm.twist1 {
  display: block;
}
/deep/ .el-badge__content {
    background-color: red;
    font-weight: 600;
  }
  /deep/ .el-badge__content.is-fixed {
    right: 0px;
  }
  /deep/ .el-badge {
    position: relative;
    display: inline-block;
    top: -3px;
}
</style>
