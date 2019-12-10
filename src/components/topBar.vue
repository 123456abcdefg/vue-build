<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
    <div id="topbar-wrap">
        <el-row type="flex" justify="space-between">
            <el-col :span="2">
              <h3 class="logo">
                <!-- <img src="@/assets/images/logo.png"/> -->
                <span class="rythm twist1">练习demo</span>
              </h3>
            </el-col>
            <el-col>
                <el-row type="flex" class="row-right" justify="end">
                    
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'topbar',
  data() {
    return {
     
    }
  },
  created(){
   
  },
  computed: {
  },
  mounted(){

  },
  methods: {
    
  },
  watch: {
  }
}
</script>
<style scoped lang="scss">
.el-dropdown-link{
  font-size:16px;
  color:#FFF;
  cursor: pointer;
}
#topbar-wrap {
  // overflow: hidden;
  background: #4D74FF;
  color: #fff;
  // padding: 0 15px;
  box-sizing: border-box;
  // height:62px;
  // position:relative;
  // width:100%;
  min-width: 1200px;
}
.fa.nav-rotate {
  transform: rotate(90deg);
}
.row-right > div {
  text-align: center;
}
</style>
