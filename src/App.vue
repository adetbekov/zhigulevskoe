<template>
  <div id="app">
    <Helmet v-if="$route.name!='Check' && $route.name!='Brands'"></Helmet>
    <router-view></router-view>
    <div v-if="$route.name!='Check' && $route.name!='Brands'" class="radio-toolbar d-flex justify-content-center w-100 align-items-center mt-3">
      <br>
      <input type="radio" id="kz" name="lang" value="kz" v-model="locale">
      <label for="kz">KZ</label>
      <span style="margin-top: -8px;padding-top:-10px;"><b>|</b></span>
      <input type="radio" id="ru" name="lang" value="ru" v-model="locale">
      <label for="ru">RU</label>
    </div>
    <Basement v-if="$route.name!='Check' && $route.name!='Brands'"></Basement>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      locale: 'ru'
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
      { rel: 'icon', href: require('./assets/favicon.png'), sizes: '16x16', type: 'image/png' }, 
      // with shorthand
      { r: 'icon', h: require('./assets/logo.png'), sz: '32x32', t: 'image/png' },
      // ...
    ],
  },
  watch: {
    locale(val){
      this.$i18n.locale = val
      // this.$store.dispatch('changeLocale', {
      //   locale: val
      // })
    },
    getLocale(val){
      this.locale = val
    }
  },
  computed: {
    getLocale(){
      return this.$i18n.locale
    }
  },
  mounted(){
    this.locale = this.getLocale
  }
}
</script>

<style>
@font-face {
  font-family: 'BebasNeue';
  src: url('./assets/fonts/BebasNeue_Regular.otf');
}
@font-face {
  font-family: 'BebasNeue';
  src: url('./assets/fonts/BebasNeue_Bold.otf');
  font-weight: bold;
}
@font-face {
  font-family: 'BebasNeue';
  src: url('./assets/fonts/BebasNeue_Book.otf');
  font-weight: 300;
}
@font-face {
  font-family: 'BebasNeue';
  src: url('./assets/fonts/BebasNeue_Light.otf');
  font-weight: 200;
}
@font-face {
  font-family: 'BebasNeue';
  src: url('./assets/fonts/BebasNeue_Thin.otf');
  font-weight: 100;
}
html{
  background-color: #ffd500;
  max-width: 100vw;
}
body,html{
  min-width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
}
body, #app{
  min-height: 100vh;
}
#app {
  font-family: 'BebasNeue', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  color: #770e00;
  background-color: #ffd500;
  background-image: url('./assets/check/light_under_logo.png');
  background-position: center;
  background-size: cover;
  min-width: 100vw;
  height: 100%;
}
.blue-text{
  color: #006eb9;
}
.yellow-text{
  color:#ffd500;
}
.yellow-bg{
  background-color: #ffd500;
}
textarea:hover, 
input:hover, 
textarea:active, 
input:active, 
textarea:focus, 
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active
{
    outline:0px !important;
    -webkit-appearance:none;
}
.swiper-pagination-bullet{
  background-color: white;
  border-radius: 0;
  opacity: 0.6;
  height: 4px;
  width: 50px;
  padding: 0;
  margin: 0;
}
.swiper-pagination-bullet-active{
  background-color: white;
  opacity: 1;
  border-radius: 0;
  height: 4px;
  width: 50px;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 600px){
  .swiper-pagination-bullet{
    background-color: white;
    border-radius: 0;
    opacity: 0.6;
    height: 4px;
    width: 30px;
    padding: 0;
    margin: 0;
  }
  .swiper-pagination-bullet-active{
    background-color: white;
    opacity: 1;
    border-radius: 0;
    height: 4px;
    width: 30px;
    padding: 0;
    margin: 0;
  }
}

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
  /*font-size: 25px;*/
  /*padding: 0 5px;*/
}
/*::-webkit-scrollbar {
    width: 0px; 
    background: transparent;  
}*/
  a{
    color: #770e00;
  }
  a:hover{
    color:#006eb9;
  }
</style>
