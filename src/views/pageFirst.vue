/**--
	页面1
	开发者：李仪波
	2019-12-16
*/
<template>
	<div class="contrainer">
		<div class="contranier_top">
			<BusinessFirst 
				:tableData='tableData' 
				:tableColData='tableColData'
				:hideButtons='hideButtons'
				:ruleForm='ruleForm'
				@handleSelectionChange='handleSelectionChange'
				@formData='formData'
				@selectData='selectData'>
			</BusinessFirst>
		</div>
		<div class="contranier_bottom">
			<Table
				:tableData='tableData' 
				:tableColData='tableColData'
				:hideButtons='hideButtons'>
			</Table>
		</div>
	</div>
	
</template>

<script>
import BusinessFirst from '@/components/businessComponent/businessFirst';
import Table from '@/components/basicComponents/table/table';

export default {
	components: {
		BusinessFirst,
		Table,
	},
	data(){
		return{
			tableData : [{
				date: '2016-05-02',
				name: '王小虎2222',
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
			}],
			tableColData: [{
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
			hideButtons: true,
			ruleForm: {
				name: '',
        email: '',
			},

		}
	},
	methods: {
		handleSelectionChange(item){
			console.log(item);
		},
		formData(item){
			console.log(item)
		},
		selectData(){
		}

	},
}
</script>

<style lang="scss" scoped>
.contrainer{
	.contranier_top{
	}
	.contranier_bottom{
		margin-top: 20px;
	}
}
</style>