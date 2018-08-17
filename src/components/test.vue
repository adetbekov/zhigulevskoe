<template>
	<div class="container bg pl-5">
		<br><br>
		<div class="w-75 d-flex justify-content-between">
		  <BlurShadow>
		  	<div class="blue red"><b>Blog</b><p class="mb-0 pb-0 small">What I think about</p></div>
		  </BlurShadow>
		  <BlurShadow>
		  	<div class="blue red"><b>Academy</b><p class="mb-0 pb-0 small">hello everypody</p></div>
		  </BlurShadow>
		  <BlurShadow>
		  	<div class="blue red"><b>Studio</b><p class="mb-0 pb-0 small">hello everypody</p></div>
		  </BlurShadow>
		  <BlurShadow>
		  	<div class="blue red"><b>Design</b><p class="mb-0 pb-0 small">hello everypody</p></div>
		  </BlurShadow>
	  </div>
	  <br><br><br><br><br>
	  <BlurShadow>
		  	<img src="../assets/logo.png">
		  </BlurShadow>
  </div>
</template>
<script>
	import BlurShadow from './BlurShadow.vue'
	export default{
		components: {
		  BlurShadow
		}
	}
</script>
<style scoped>
	.bg{
		background-color: black;
		width: 1000px;
		height: 1000px;
	}
	.blue{
		min-width: 50px;
	  padding: 5px;
	  border-radius: 7px;
	  font-family: helvetica;
	  display: block;
	  font-size: 10px;
	  background: #3498db;
	  border:none;
	  color: white;
	  line-height: 1.2;
	}
	b{
		display: block;
		padding-bottom: 1.5px;
	}
	.red{
	  background: linear-gradient(to right bottom, #3498db, #9b59b6);
	}
	.yellow{
	  background: #f1c40f;
	}
	.violet{
	  background: #9b59b6;
	}
	.green{
	  background: #2ecc71;
	}
</style>