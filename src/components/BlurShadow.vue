<template>
	<div class="d-blur" 
	:id="id" 
	:class="customClass" 
	:style="{ 'width': this.width + 'px', 'height': this.height + 'px'}"
	>
		<div class="bg" ref="slot"><slot></slot></div>
		<div class="head"><slot></slot></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				height: 0,
				width: 0
			}
		},
		props: {
			id: {
				type: String,
				default: null
		    },
		  customClass: {
				type: String,
				default: null
		  }
		},
		mounted() {
			this.height = this.$refs.slot.clientHeight
			this.width = this.$refs.slot.clientWidth
		}
	}
</script>

<style scoped>
	.d-blur {
		display: block;
	}
	.d-blur div {
		position: absolute;
	}
	.bg {
		pointer-events: none;
		padding-top: 10px;
		opacity: 0.6;

		-webkit-filter: blur(12px) brightness(110%) saturate(2);
	  -moz-filter: blur(12px) brightness(110%) saturate(2);
	  -o-filter: blur(12px) brightness(110%) saturate(2);
	  -ms-filter: blur(12px) brightness(110%) saturate(2);
	  filter: blur(12px) brightness(110%) saturate(2);
	}
</style>