/**--
	业务组件1
	开发者：李仪波
	2019-12-16
*/
<template>
	<div class="contrainer">
		<div class="contrainer_top">
			<div class="inputs">
				<basicInput
					ref="ruleForm1"
					:nameLabel='nameLabel1'
					:ruleForm='ruleForm'
					@formData='formData'>
				</basicInput>
				<emailInput
					ref="ruleForm2"
					:ruleForm='ruleForm'
					:nameLabel='nameLabel2'
					@formData='formData'>
				</emailInput>
			</div>
			<div class="buttons">
				<Button :buttonStyle='buttonStyle_blue' @click="selectData">{{ buttonWords1 }}</Button>
				<Button :buttonStyle='buttonStyle_orange'>{{ buttonWords2 }}</Button>
				<Button>{{ buttonWords3 }}</Button>
			</div>
		</div>
		<div class="tables">
			<multipleTable 
				:tableData='tableData' 
				:tableColData='tableColData'
				@handleSelectionChange='handleSelectionChange'>
			</multipleTable>
		</div>
	</div>
</template>

<script>
import Button from '@/components/basicComponents/button/button';
import multipleTable from '@/components/basicComponents/table/multipleTable';
import basicInput from '@/components/basicComponents/inputBox/basicInput';
import emailInput from '@/components/basicComponents/inputBox/emailInput';

export default {
	components: {
		Button,
		multipleTable,
		basicInput,
		emailInput,
	},
	props: ['tableData', 'tableColData', 'hideButtons', 'ruleForm'],
	data(){
		return{
			buttonWords1: '查询 ',
			buttonWords2: '删除',
			buttonWords3: '重置',
			buttonStyle_blue: 'buttonStyle_blue',
			buttonStyle_orange: 'buttonStyle_orange',
			nameLabel1: '用户名',
			nameLabel2: '电子邮箱',
			

		}
	},
	methods: {
		handleSelectionChange(item){
			this.$emit('handleSelectionChange', item);
		},
		formData(item){
			this.$emit('formData', item);
		},
		//查询数据
		selectData(){
			let flag = [];
			flag.push(this.$refs['ruleForm1'].validateForm());
			flag.push(this.$refs['ruleForm2'].validateForm());
			for(var i = 0;i<flag;i++){
				if(!item){
					this.$message.error('保全信息不完整，请继续填写完整');
					break;
				}else{
					this.$emit('selectData')
				}
			}
		},

	},
}
</script>

<style lang="scss" scoped>
.contrainer{
	.contrainer_top{
		display: flex;
		.inputs{
			display: flex;
			div:last-child{
				margin-left: 10px;
			}
		}
		.buttons{
			display: flex;
			margin-left: 25px;
			div{
				margin-right: 10px;
			}
		}
	}
	.tables{
		margin-top: 15px;
	}
}
</style>