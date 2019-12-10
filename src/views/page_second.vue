<template>
  <artifactsFirst :tableData = tableData2 :tableColData = tableColData2 @queryData="queryData2"></artifactsFirst>
</template>

<script>
import artifactsFirst from '@/components/artifacts_first';

export default {
	components: {
		artifactsFirst,
	},
	data(){
		return{
			tableColData2: [{
				id: 'date',
				name: '日期'
			}, {
				id: 'name',
				name: '姓名'
			}, {
				id: 'telephone',
				name: '电话'
			}, {
				id: 'address',
				name: '地址'
			}],
			tableData2: [],
		}
	},
	methods: {
		queryData2(data){
			if(data.user =='' && data.region == ''){
				this.tableData2 = [{
					date: '2016-05-02',
					name: '王小虎2',
					telephone: '123',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎2',
					telephone: '123',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎2',
					telephone: '123',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎2',
					telephone: '123',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}else{
				this.tableData2 = [{
					date: '2016-05-02',
					name: '王小虎2',
					telephone: '123',
					address: '上海市普陀区金沙江路 1518 弄'
				}]
			}
		},

	},

}
</script>

<style lang="scss" scoped>

</style>