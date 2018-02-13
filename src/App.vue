<template>
  <div id="app">
    <wd-editor></wd-editor>
    {{download}}
  </div>
</template>

<script type="text/javascript">
  import {mapGetters} from 'vuex';


  export default{
    name:"app",

    computed:{
      ...mapGetters(['download']),
    },
    methods:{
    	alt:function(){
    		alert("haha");
    	}
    }
  }
</script>