<i18n>
  {
  "ru": {
    "history": "История компании",
    "historyShort": "История",
    "brands": "Наши бренды",
    "brandsShort": "Бренды",
    "arr": "Все права защищены",
    "main": "Главная",
    "brand1": "Алматинское Жигулевское",
    "brand2": "Алматинское Нефильтр",
    "brand3": "Жигулевское Экспортное",
    "brand4": "Алматинское Ячменное",
    "gallery": "Галерея",
    "commercials": "Рекламные ролики",
    "addvisuals": "Рекламные вижуалы",
    "contacts": "Контакты",
    "number1": "Номер Горячей линии",
    "number2": "Номер телефона офиса",
    "addr": "г. Алматы Гоголя 211",
    "llp": "АО"
  },
  "kz": {
    "history": "Компания тарихы",
    "historyShort": "Тарих",
    "brands": "Біздің брендтер",
    "brandsShort": "Брендтер",
    "arr": "Барлық құқықтар сақталған",
    "main": "Басты",
    "brand1": "Алматинское Жигулевское",
    "brand2": "Алматинское Нефильтр",
    "brand3": "Жигулевское Экспортное",
    "brand4": "Алматинское Ячменное",
    "gallery": "Галерея",
    "commercials": "Жарнамалық бейнебаяндар",
    "addvisuals": "Жарнамалық вижуалдар",
    "contacts": "Байланыс деректері",
    "number1": "жедел байланыс нөмірі",
    "number2": "Жұмыс телефоны",
    "addr": "Алматы қ. Гоголь 211",
    "llp": "Ақ"
  }
  }
</i18n>
<template>
	<div>
    <div class="container">
	    <div class="row small">
	    	<div class="offset-md-2 col-md-2">
	    		<p class="mb-1"><b><router-link to="/">{{ $t('main') }}</router-link></b></p>
					<ul class="list-unstyled pl-2">
						<li><router-link to="/history" :active="$route.name=='History'">{{ $t('history') }}</router-link></li>
						<li><router-link to="/brands" :active="$route.name=='Brands'">{{ $t('brands') }}</router-link></li>
					</ul>
	    	</div>
	    	<div class="col-md-2">
	    		<p class="mb-1"><b><router-link to="/brands">{{ $t('brands') }}</router-link></b></p>
					<ul class="list-unstyled pl-2">
						<li><router-link to="/brands#zhigulevskoe">{{ $t('brand1') }}</router-link></li>
						<li><router-link to="/brands#nefiltr">{{ $t('brand2') }}</router-link></li>
						<li><router-link to="/brands#exportnoe">{{ $t('brand3') }}</router-link></li>
						<li><router-link to="/brands#yachmennoe">{{ $t('brand4') }}</router-link></li>
					</ul>
	    	</div>
	    	<div class="col-md-2">
	    		<p class="mb-1"><b><router-link to="/">{{ $t('gallery') }}</router-link></b></p>
					<ul class="list-unstyled pl-2">
						<li><router-link to="/commercials">{{ $t('commercials') }}</router-link></li>
						<li><router-link to="/">{{ $t('addvisuals') }}</router-link></li>
					</ul>
	    	</div>
	    	<div class="col-md-3">
	    		<p class="mb-1"><b>{{ $t('contacts') }}</b></p>
					<ul class="list-unstyled pl-2">
						<li><a href="tel:+77273779999">{{ $t('number1') }} +7 (727) 377 99 99</a></li>
						<li><a href="tel:+77273787487">{{ $t('number2') }} +7 (727) 378 74 87</a></li>
						<li><router-link to="/">{{ $t('addr') }}</router-link></li>
						<li><router-link to="/">{{ $t('llp') }} CASPIAN BEVERAGE HOLDING</router-link></li>
						<li><a href="mailto:CBH@sx.kz">CBH@sx.kz</a></li>
					</ul>
	    	</div>
	    </div>
    </div>
    <p class="text-center small pb-0 mb-0" style="font-weight:300;">Caspian Beverage Holding (Каспиан Беверейдж Холдинг), АО'</small></p>
    <p class="text-center pb-0 mb-0">
      <a href="https://www.facebook.com/zhigalma.kz" target="_blank"><icon name="facebook-square" class="mx-2"></icon></a>
      <a href="https://www.instagram.com/zhigalma.kz" target="_blank"><icon name="instagram" class="mx-2"></icon></a>
      <a href="https://vk.com/zhigalma" target="_blank"><icon name="vk" class="mx-2"></icon></a>
    </p>
    <p class="text-center small" style="font-weight:100;font-family: helvetica;"><small><small>© Copyright {{ moment().year() }}. {{ $t('arr') }}</small></small></p>
  </div>
</template>

<script>
	export default{
		props: ['locale'],
		watch: {
			locale(val){
				this.$i18n.locale = val
			}
		}
	}
</script>

<style scoped>
	a{
		color: #770e00;
	}
	a[active]{
		color:#006eb9;
	}
	p {
		letter-spacing: 1.5px;
	}
	a{
		letter-spacing: 1px;
	}
</style>
