<template>
<div>
  <div class="container-fluid" ref="container">
		<div class="row mt-4">
			<swiper :options="swiperOption" class="swiper">
        <swiper-slide>
        	<div class="w-100 pb-5">
        		<div class="row">
      				<div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/LrRDbo4qkOs?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
        		</div>
        	</div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5DXVjW8jmAU?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/B1WX8AUKMas?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K8zCLCfOZFM?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/HCyvFLoszrI?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QE5HfSn-dcI?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Rm6ccbLhgCk?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-100">
            <div class="row">
              <div class="offset-md-2 col-md-8 d-flex align-items-center px-0 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/h8qG31jka-Q?rel=0" frameborder="0" allowfullscreen></iframe>    
              </div>
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
        effect: 'coverflow',
        coverflow: {
              rotate: 20,
              stretch: 100,
              depth: 1000,
              modifier: 2,
              slideShadows : true
          },
        // effect: 'cube',
        // cube: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94
        //   },
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplayDisableOnInteraction: false
  		}
    }
  },
  head: {
    title: {
      inner: 'Рекламные ролики',
      separator: '|',
      complement: 'Жигулёвское пиво'
    },
    meta: [
      { name: 'application-name', content: 'Жигулёвское пиво' },
      { name: 'description', content: 'Жигулёвское пиво, Жигалма. Рекламные ролики.', id: 'desc' },
      { property: 'fb:app_id', content: 'zhigalma.kz' },
      { property: 'og:title', content: 'Рекламные ролики' },
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
a{
	color: #770e00;
}
a:hover{
	color:#006eb9;
}
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
