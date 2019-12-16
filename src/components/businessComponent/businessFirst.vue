/**--
	业务组件1
	开发者：李仪波
	2019-12-16
*/
<template>
	<div class="contrainer">
		<div class="buttons">
			<Button :buttonStyle='buttonStyle_blue'>{{ buttonWords1 }}</Button>
			<Button :buttonStyle='buttonStyle_orange'>{{ buttonWords2 }}</Button>
			<Button>{{ buttonWords3 }}</Button>
		</div>
	</div>
</template>

<script>
import Button from '@/components/basicComponents/button'

export default {
	components: {
		Button,
	},
	data(){
		return{
			buttonWords1: '新增',
			buttonWords2: '删除',
			buttonWords3: '重置',
			buttonStyle_blue: 'buttonStyle_blue',
			buttonStyle_orange: 'buttonStyle_orange'

		}
	}
}
</script>

<style lang="scss" scoped>
.contrainer{
	.buttons{
		display: flex;
	}
}
</style>