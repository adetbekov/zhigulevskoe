<template>
<div>
  <div class="container-fluid" ref="container">
		<div class="row">
			<swiper :options="swiperOption" class="swiper">
        <swiper-slide>
        	<div class="w-100 hidden-md-up">
        		<br>
	        	<p class="text-center">
	        		<img src="../assets/main/nadpis.png" alt="Word" height="70" v-if="$i18n.locale=='ru'">
              <img src="../assets/main/yourarenotalone_small.png" alt="Word" height="50" v-else>
	        	</p>
	        	<div class="w-100">
	        		<img class="img-fluid w-100" src="../assets/main/slider-visual-bg-m.jpg" alt="bg1">
	        	</div>
        	</div>
        	<div class="w-100 first hidden-sm-down">
        		<div class="row">
      				<div class="offset-md-6 col-md-2 d-flex align-items-center px-0">
                <img src='../assets/main/nadpis.png' alt='Word' class='img-fluid' v-if="$i18n.locale=='ru'"> 
                <img src='../assets/main/yourarenotalone_small.png' alt='Word' class='img-fluid' v-else>    
              </div>
      				<div class="col-md-2 px-0"><img src="../assets/main/Bottle.png" alt="Bottle" class="img-fluid"></div>
        		</div>
        	</div>
        </swiper-slide>
        <swiper-slide>
        	<div class="w-100 hidden-md-up">
        		<br>
	        	<p class="text-center">
	        		<img src='../assets/main/snamiletokrugliygod.png' alt='Word' height="70" v-if="$i18n.locale=='ru'"> 
              <img src='../assets/main/zhylonekiay.png' alt='Word' height="50" v-else> 
	        	</p>
	        	<div class="w-100">
	        		<img class="img-fluid" src="../assets/main/mobile2.png" alt="bg2">
	        	</div>
        	</div>
        	<div class="w-100 second hidden-sm-down">
        		<div class="row">
      				<div class="offset-md-6 col-md-2 d-flex align-items-start px-0 pt-5">
                <img src='../assets/main/snamiletokrugliygod.png' alt='Word' class='img-fluid' v-if="$i18n.locale=='ru'"> 
                <img src='../assets/main/zhylonekiay.png' alt='Word' class='img-fluid' v-else> 
              </div>
      				<div class="col-md-2 px-0"><img src="../assets/main/Bottle.png" alt="Bottle" class="img-fluid"></div>
        		</div>
        	</div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100 hidden-md-up">
            <br>
            <p class="text-center">
              <img src="../assets/main/nadpis.png" alt="Word" height="70" v-if="$i18n.locale=='ru'">
              <img src="../assets/main/yourarenotalone_small.png" alt="Word" height="50" v-else>
            </p>
            <div class="w-100">
              <img class="img-fluid w-100" src="../assets/main/mobile3.png" alt="bg3">
            </div>
          </div>
          <div class="w-100 third hidden-sm-down">
            <div class="row">
              <div class="offset-md-6 col-md-2 d-flex align-items-center px-0">
                <img src='../assets/main/nadpis.png' alt='Word' class='img-fluid' v-if="$i18n.locale=='ru'"> 
                <img src='../assets/main/yourarenotalone_small.png' alt='Word' class='img-fluid' v-else>    
              </div>
              <div class="col-md-2 px-0"><img src="../assets/main/Bottle.png" alt="Bottle" class="img-fluid"></div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
		</div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      width: 0,
      swiperOption: {
  		  pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 8000,
        autoplayDisableOnInteraction: false
  		}
    }
  },
  head: {
    title: {
      inner: 'Жигалма',
      separator: '|',
      complement: 'Жигулёвское пиво'
    },
    meta: [
      { name: 'application-name', content: 'Жигулёвское пиво' },
      { name: 'description', content: 'Жигулёвское пиво, Жигалма. Ты не один с пивом №1. Рекламные вижуалы.', id: 'desc' },
      { property: 'fb:app_id', content: 'zhigalma.kz' },
      { property: 'og:title', content: 'Рекламные вижуалы' },
    ],
    link: [
      { rel: 'canonical', href: 'http://zhigulevskoe.kz/', id: 'canonical' },
      { rel: 'icon', href: require('../assets/favicon.png'), sizes: '16x16', type: 'image/png' }, 
      // with shorthand
      { r: 'icon', h: require('../assets/logo.png'), sz: '32x32', t: 'image/png' },
      // ...
    ],
  },
  methods: {
    handleResize(){
      this.width = window.innerWidth
    }
  },
  filters: {
    spacer: function (value) {
      if (!value) return ''
      value = value.toString().split(' ').join('\xa0')
      return value.split('').join('\xa0\xa0')
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
}
</script>

<style scoped>
.swiper{
	min-width: 100vw;
	min-height: 300px;
}
.first{
	background-image: url("../assets/main/slider-visual-bg.jpg");
	background-position: center;
	background-size: cover;
	height: 100%;
}
.second{
  background-image: url("../assets/main/winter.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
}
.third{
  background-image: url("../assets/main/slider3.png");
  background-position: center;
  background-size: cover;
  height: 100%;
}
.swiper-button-prev{
	background-image: url('../assets/main/arrow-left.png');
	background-position: left;
	background-size: cover;
  height: 100px;
  width: 34;
  margin-left: 100px;
  margin-top: -50px;
}
.swiper-button-next{
	background-image: url('../assets/main/arrow-right.png');
	background-position: left;
	background-size: cover;
  height: 100px;
  width: 34;
  margin-right: 100px;
  margin-top: -50px;
}
@media screen and (max-width: 768px){
	.swiper-button-prev{
	  margin-left: 10px;
	}
	.swiper-button-next{
	  margin-right: 10px;
	}
}
</style>
