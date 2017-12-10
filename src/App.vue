<template>
  <div id="app">
    <btn value="哈哈" @click="alt()"></btn>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:"app",
    methods:{
    	alt:function(){
    		alert("haha");
    	}
    }
  }
</script>