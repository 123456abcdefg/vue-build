<template>
	<div class="contrainer">
		<div class="contrainer_top">
			<el-form :model="formInline">
				<el-form-item label="姓名">
					<el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="formInline.region" placeholder="请输入地址"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="queryData">查询</el-button>
					<el-button @click="reset">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="contrainer_bottom">
			<el-table
				:data="tableData"
				style="width: 100%">
				<template>
					<el-table-column v-for="item in tableColData"
					:prop="item.id"
					:label="item.name"
					:key="item.id">
					</el-table-column>
				</template>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	props: ['tableData', 'tableColData'],
	data() {
		return{
			formInline: {
				user: '',
				region: ''
			},

		}
	},
	mounted(){
		this.queryData();
	},
	methods: {
		queryData(){
			this.$emit('queryData', this.formInline);
		},
		reset(){
			this.formInline = {
				user: '',
				region: ''
			}
			this.queryData();
		},

	},

}
</script>

<style lang="scss" scoped>
.contrainer{
	// border: 1px solid red;

	.contrainer_top{
		background-color: #ffffff;
		margin-bottom: 20px;
		padding: 10px;
		border-radius: 5px;
		.el-form{
			display: flex;
			.el-form-item{
				display: flex;
				margin-right: 10px;
				margin-bottom: 0 !important;
				/deep/ .el-form-item__content{
					/deep/ .el-input__inner{
						height: 32px;
						line-height: 32px;
					}
					.el-button{
						padding: 8px 14px;
					}
				}
			}
		}
	}
	.contrainer_bottom{
		background-color: #ffffff;
		padding: 10px;
		border-radius: 5px;
	}
}
</style>