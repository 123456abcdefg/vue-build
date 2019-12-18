/**--
  基本组件--按钮  
  开发者：李仪波
  2019-12-16
 */
<template>
  <div class="contrainer">
    <el-button :class="buttonStyle" @click="click">
      <slot></slot>
    </el-button>
  </div>

</template>

<script>
export default {
  props: {
    buttonStyle: {
      default: ''
    },

  },
  data(){
    return{
      
    }
  },
  methods: {
    click(){
      this.$emit('click');
    }
  },
}
</script>

<style lang="scss" scoped>
.contrainer{
  .el-button{
    padding: 9px 17px;
    &.buttonStyle_blue{
      background-color: #5576f6;
      color: white;
    }
    &.buttonStyle_orange{
      background-color: #fc572b;
      color: white;
    }
  }
}
</style>