/**--
  基本组件--基本输入框  
  开发者：李仪波
  2019-12-17
 */
<template>
  <div class="contrainer">
    <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
      <el-form-item :label="nameLabel" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  props: ['nameLabel', 'ruleForm'],
  data(){
    return{
      rules: {
        name: [
          { required: true, message: '不能为空', trigger: 'blur' },
        ],
      },
      
    }
  },
  watch: {
    'ruleForm.name': function(item){
      this.$emit('formData', item);
    }
  },
  methods: {
    //子组件校验，传递到父组件
    validateForm () {
      let flag = null
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          flag = true
        } else {
          flag = false
        }
      })
      return flag
    }
  }
  
}
</script>

<style lang="scss" scoped>
.contrainer{
  /deep/ .el-form-item{
    display: flex;
    align-items: center;
    .el-form-item__content{
      line-height: 32px;
      .el-input__inner{
        height: 32px;
        line-height: 32px;
      }
    }
  }
}
</style>