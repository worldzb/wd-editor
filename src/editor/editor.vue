<template>
	<div id="editor">
		<WDmenu value="haha"></WDmenu>
		<WDcontent></WDcontent>
	</div>
</template>
<script type="text/javascript">
	import WDmenu from "../WDmenu/WDmenu.vue";
	import WDcontent from '../WDcontent/WDcontent.vue';
	export default{
		components:{
			WDmenu:WDmenu,
			WDcontent:WDcontent,
		}
	}

</script>