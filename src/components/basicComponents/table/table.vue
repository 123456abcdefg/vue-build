/**--
  基本组件--普通表格  
  开发者：李仪波
  2019-12-17
 */
<template>
  <div class="contrainer">
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <template>
        <el-table-column v-for="item in tableColData"
        :prop="item.id"
        :label="item.name"
        :key="item.id">
        </el-table-column>
      </template>
      <el-table-column label="操作" min-width="60" v-if="hideButtons">
        <template slot-scope="scope">
          <div class="operations">
            <p>修改</p>
            <p>删除</p>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  props: {
    tableData: {

    },
    tableColData: {

    },
    hideButtons: {
      default: false,
    },
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>
.contrainer{
  /deep/ .el-table thead{
    color: #909399;
    font-weight: 500;
  }
  /deep/ .el-table th{
    color: #43464a;
    background-color: #f5f6fa !important;
    padding: 1px 0;
  }
  /deep/ .el-table td, .el-table th{
    padding: 8px 0;
  }
  .operations{
    display: flex;
    p{
      margin: 0;
      cursor: pointer;
    }
    p:first-child{
      color: #5576f6;
    }
    p:last-child{
      color: #fc572b;
      margin-left: 20px;
    }
  }
}
</style>