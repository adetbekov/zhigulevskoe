<i18n>
  {
  "ru": {
    "welcome": "Добро пожаловать",
    "age": "Укажите свой возраст для входа на сайт:",
    "months": [ "ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК" ],
    "enter": "В о й т и",
    "arr": "Все права защищены",
    "warning": "Внимание",
    "popupContent": "Доступ к сайту разрешен лицам старше 21 года!"
  },
  "kz": {
    "welcome": "қош келдіңіз",
    "age": "Сайтқа кіру үшін жасыңызды көрсетіңіз:",
    "months": [ "қаң", "ақп", "нау", "сәу", "мам", "мау", "шіл", "там", "қыр", "қаз", "қар", "жел" ],
    "enter": "К і р у",
    "arr": "Барлық құқықтар сақталған",
    "warning": "Назар аудар",
    "popupContent": "Сайтқа кіру 21 жылдан асқан тұлғаларға рұқсат етіледі!"
  }
  }
</i18n>

<template>
<div style="min-height: 100vh">
  <div ref="popup1" class="white_content">
    <button @click="close()" class='close'><img src="../assets/check/popup_window_close.png" alt="close" width="20"></button>
    <h4 class="text-center hidden-sm-up"><b>{{ $t('warning') | spacer }}</b></h4>
    <h3 class="text-center hidden-xs-down"><b>{{ $t('warning') | spacer }}</b></h3>
    <p class="text-center"><img src="../assets/check/popup_window_line.png" alt="line"></p>
    <h5 class="text-center blue-text"><b>{{ $t('popupContent') }}</b></h5>
  </div>
  <div ref="popup2" class="white_content_mobile hidden-sm-up">
    <button @click="close()" class='close'><img src="../assets/check/popup_window_close.png" alt="close" width="20"></button>
    <h4 class="text-center hidden-sm-up"><b>{{ $t('warning') | spacer }}</b></h4>
    <h3 class="text-center hidden-xs-down"><b>{{ $t('warning') | spacer }}</b></h3>
    <p class="text-center"><img src="../assets/check/popup_window_line.png" alt="line"></p>
    <h5 class="text-center blue-text"><b>{{ $t('popupContent') }}</b></h5>
  </div>
  <div ref="fade" class="black_overlay"></div>
  <div class="container d-flex flex-column justify-content-between" ref="container" style="min-height: 100vh">
    <p class="text-center"><img src="../assets/logo.png" alt="Logo" height="85" class="mt-4"></p>
    <div>
      <h4 class="text-center hidden-sm-up"><b>{{ $t('welcome') | spacer }}</b></h4>
      <h3 class="text-center hidden-xs-down"><b>{{ $t('welcome') | spacer }}</b></h3>
      <h5 class="text-center blue-text"><b>{{ $t('age') }}</b></h5>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        
        <div class="hidden-xs-down" v-if="width > 576">
        <div class="radio-toolbar mt-4 text-center d-flex justify-content-between flex-wrap align-items-center">
          <template v-for="(m, i) in $t('months')">
            <input type="radio" :id="`month${i}`" name="months" :value="i" v-model="month">
            <label :for="`month${i}`">{{ m }}</label>
          </template>
        </div>
        <div class="radio-toolbar mt-2 text-center d-flex justify-content-between flex-wrap align-items-center">
          <template v-for="d in 31">
            <input type="radio" :id="`day${d}`" name="days" :value="d" v-model="day">
            <label :for="`day${d}`">{{ d }}</label>
          </template>
        </div>
        <div class="w-100 d-flex align-items-center">
          <button class="navbtn left" @click="slideLeft()"></button>
          <div class="w-100" style="overflow: hidden;" ref="years">
            <div class="radio-toolbar mt-2 text-center d-flex justify-content-between align-items-center">
              <div class="float-left block" v-for="y in years">
                <input type="radio" :id="`year${y}`" name="years" :value="y" v-model="year">
                <label :for="`year${y}`">{{ y }}</label>
              </div>
            </div>
          </div>
          <button class="navbtn right" @click="slideRight()"></button>
        </div>
        </div>
        

        <div class="hidden-sm-up d-flex w-100" style="max-height: 200px;" v-else>
          <div class="overflow-h w-100 d-flex align-items-center flex-column box">
            <button class="m-navbtn up pt-1 pb-2" @click="slideUp('months')"></button>
            <div class="w-100" style="overflow-y: auto;" ref="months">
              <div class="radio-toolbar mt-1 text-center d-flex flex-column justify-content-between align-items-center">
                <template v-for="(m, i) in $t('months')">
                  <input type="radio" :id="`month${i}`" name="months" :value="i" v-model="month">
                  <label :for="`month${i}`">{{ m }}</label>
                </template>
              </div>
            </div>
            <button class="m-navbtn down pt-2 pb-1" @click="slideDown('months')"></button>
          </div>
          <div class="overflow-h w-100 d-flex align-items-center flex-column box">
            <button class="m-navbtn up pt-1 pb-2" @click="slideUp('days')"></button>
            <div class="w-100" style="overflow-y: auto;" ref="days">
              <div class="radio-toolbar mt-2 text-center d-flex flex-column justify-content-between align-items-center">
                <template v-for="d in 31">
                  <input type="radio" :id="`day${d}`" name="days" :value="d" v-model="day">
                  <label :for="`day${d}`">{{ d }}</label>
                </template>
              </div>
            </div>
            <button class="m-navbtn down pt-2 pb-1" @click="slideDown('days')"></button>
          </div>
          <div class="overflow-h w-100 d-flex align-items-center flex-column box">
            <button class="m-navbtn up pt-1 pb-2" @click="slideUp('years')"></button>
            <div class="w-100" style="overflow-y: auto;" ref="years">
              <div class="radio-toolbar mt-2 text-center d-flex flex-column justify-content-between align-items-center">
                <template v-for="y in years">
                  <input type="radio" :id="`year${y}`" name="years" :value="y" v-model="year">
                  <label :for="`year${y}`">{{ y }}</label>
                </template>
              </div>
            </div>
            <button class="m-navbtn down pt-2 pb-1" @click="slideDown('years')"></button>
          </div>
        </div>

        <p class="text-center mb-0"><button class="submit" @click="enter()" :disabled="!validated">{{ $t('enter') | spacer }}</button></p>
        <img class="w-100" src="../assets/check/linia.png" alt="line">
      </div>
    </div>
    <div>
    <div class="radio-toolbar d-flex justify-content-center w-100 align-items-center mt-3">
      <input type="radio" id="kz" name="lang" value="kz" v-model="locale">
      <label for="kz">KZ</label>
      <span style="margin-top: -8px;padding-top:-10px;"><b>|</b></span>
      <input type="radio" id="ru" name="lang" value="ru" v-model="locale">
      <label for="ru">RU</label>
    </div>
    <p class="text-center small pb-0 mb-0" style="font-weight:300;">Caspian Beverage Holding (Каспиан Беверейдж Холдинг), АО'</small></p>
    <p class="text-center pb-0 mb-0">
      <a href="https://www.facebook.com/zhigalma.kz" target="_blank"><icon name="facebook-square" class="mx-2"></icon></a>
      <a href="https://www.instagram.com/zhigalma.kz" target="_blank"><icon name="instagram" class="mx-2"></icon></a>
      <a href="https://vk.com/zhigalma" target="_blank"><icon name="vk" class="mx-2"></icon></a>
    </p>
    <p class="text-center small" style="font-weight:100;font-family: helvetica;"><small><small>© Copyright {{ moment().year() }}. {{ $t('arr') }}</small></small></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      day: null,
      month: null,
      year: null,
      locale: 'ru',
      date: null,
      width: 0
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
  watch:{
    locale(val){
      this.$i18n.locale = val
    },
    getLocale(val){
      this.locale = val
    }
  },
  methods: {
    enter(){
      this.date = moment().set({ "year": this.year, "month": this.month, "day": this.day })
      localStorage.setItem('date', this.date)
      this.checker()
    },
    close(){
      this.$refs.popup1.style.display='none'
      this.$refs.popup2.style.display='none'
      this.$refs.fade.style.display='none'
      this.$refs.container.style.filter='blur(0px)'
      this.$refs.container.style.pointerEvents='initial'
    },
    slideRight(){
      TweenMax.to(this.$refs.years, 0.6, { scrollLeft: "+=300" })
    },
    slideLeft(){
      TweenMax.to(this.$refs.years, 0.6, { scrollLeft: "-=300" })
    },
    slideUp(i){
      TweenMax.to(this.$refs[i], 0.6, { scrollTop: "-=120" })
    },
    slideDown(i){
      TweenMax.to(this.$refs[i], 0.6, { scrollTop: "+=120" })
    },
    checker(){
      if(this.checked){
        this.$router.push("main")
      }else if(this.getDate){
        this.$refs.popup1.style.display='block'
        this.$refs.popup2.style.display='block'
        this.$refs.fade.style.display='block'
        this.$refs.container.style.filter='blur(7px)'
        this.$refs.container.style.pointerEvents='none'
      }
    },
    handleResize(){
      this.width = window.innerWidth
    }
  },
  computed: {
    getLocale(){
      return this.$i18n.locale
    },
    years(){
      let yearBoundary = moment().year() - 5
      return _.range(yearBoundary-60, yearBoundary)
    },
    validated(){
      return this.year != null && this.month != null && this.day != null
    },
    checked(){
      return this.getDate
        ? moment(this.getDate).add(21, "years") <= moment()
        : false
    },
    getDate(){
      return this.date
        ? this.date
        : localStorage.getItem('date')
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
    this.checker()
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.locale = this.getLocale
  }
}
</script>

<style scoped>

.radio-toolbar input[type="radio"] {
  display: none;
}

.radio-toolbar label {
  font-weight: bold;
  padding: 3px 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.radio-toolbar input[type="radio"]:checked+label {
  color: #006eb9;
  font-size: 25px;
  padding: 0 5px;
}
.block input[type="radio"]:checked+label {
  font-size: 20px;
  padding: 0 0px;
}
::-webkit-scrollbar {
    width: 0px; 
    background: transparent;  
}

.navbtn{
  border: 0;
  background: transparent;
  display: block;
  width: 11.7px;
  height: 20px;
  margin-top: -3px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.m-navbtn{
  border: 0;
  background: transparent;
  display: block;
  width: 20px;
  height: 18px!important;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.left{
  background-image: url('../assets/check/left.png');
  margin-right: 8px;
}
.right{
  background-image: url('../assets/check/right.png');
  margin-left: 13px;
}
.up{
  background-image: url('../assets/check/up.png');
  margin-bottom: 8px;
}
.down{
  background-image: url('../assets/check/down.png');
  margin-top: 8px;
}

.submit{
  margin-top: 20px;
  font-family: 'BebasNeue';
  font-weight: bold;
  background: none;
  color: #770e00;
  border-radius: 4px;
  border: solid 2px #770e00;
  padding: 8px 35px;
  cursor: pointer;
  font-weight: bold;
}
.submit:hover{
  border: solid 2px #006eb9;
  color: #006eb9;
}
.submit:focus{
  border: solid 2px #006eb9;
  background-color: #006eb9;
  color: white;
}
.submit:disabled{
  opacity: .5;
  cursor: not-allowed;
}
.black_overlay {
  display: none;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1001;
  -moz-opacity: 0.2;
  opacity: .20;
  filter: alpha(opacity=20);
}
.white_content {
  display: none;
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 30%;
  padding: 30px;
  background-color: #ffd500;
  z-index: 1002;
  overflow: auto;
}
.white_content_mobile {
  display: none;
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 30%;
  padding: 30px;
  /*min-height: 200px;*/
  /*min-width: 400px;*/
  background-color: #ffd500;
  z-index: 1002;
  overflow: auto;
}
.close{
  background:none;
  border: none;
  position:absolute;
  right:20px;
  top:20px;
  cursor: pointer;
}
.overflow-h{
  overflow: hidden;
}
.block {
  display: block;
  min-width: 35px;
}
/*.box {
  position: relative;
}

.box:before {
  width: 100%;
  content: '';
  position: absolute;
  top: 0%;
  bottom: 90%;
  background-image: -moz-linear-gradient(top, #ffd500, rgba(255, 255, 255, 0));
  background-image: -ms-linear-gradient(top, #ffd500, rgba(255, 255, 255, 0));
  background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#ffd500), to(rgba(255, 255, 255, 0)));
  background-image: -webkit-linear-gradient(top, #ffd500, rgba(255, 255, 255, 0));
  background-image: -o-linear-gradient(top,#ffd500, rgba(255, 255, 255, 0));
  background-image: linear-gradient(top, #ffd500, rgba(255, 255, 255, 0));
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(255, 255, 255, 1)', endColorstr='rgba(255, 255, 255, 0)', GradientType=1);
}
.box:after {
  width: 100%;
  content: '';
  position: absolute;
  top: 90%;
  bottom: 0%;
  background-image: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffd500);
  background-image: -ms-linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffd500);
  background-image: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(255, 255, 255, 0)), to(#ffd500));
  background-image: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffd500);
  background-image: -o-linear-gradient(to bottom,rgba(255, 255, 255, 0), #ffd500);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffd500);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(255, 255, 255, 0)', endColorstr='#ffd500)', GradientType=1);
}*/
</style>
