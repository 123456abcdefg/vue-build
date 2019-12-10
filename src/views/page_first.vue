<template>
  <artifactsFirst :tableData = tableData1 :tableColData = tableColData1 @queryData="queryData1"></artifactsFirst>
</template>

<script>
import artifactsFirst from '@/components/artifacts_first';

export default {
	components: {
		artifactsFirst,
	},
	data(){
		return{
			tableColData1: [{
				id: 'date',
				name: '日期'
			}, {
				id: 'name',
				name: '姓名'
			}, {
				id: 'address',
				name: '地址'
			}],
			tableData1: [],

		}
	},
	methods: {
		queryData1(data){
			if(data.user =='' && data.region == ''){
				this.tableData1 = [{
					date: '2016-05-02',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1519 弄'
				}]
			}else{
				this.tableData1 = [{
					date: '2016-05-02',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1517 弄'
				},]
			}
		},

	},

}
</script>

<style lang="scss" scoped>

</style>
