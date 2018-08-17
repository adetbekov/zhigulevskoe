<i18n>
{
  "ru": {
    "history": "История компании",
    "historyShort": "История",
    "brands": "Наши бренды",
    "brandsShort": "Бренды",
    "menu": "Меню",
    "gallery": "Галерея",
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
    "menu": "Мәзiр",
    "gallery": "Галерея",
    "number1": "жедел байланыс нөмірі",
    "number2": "Жұмыс телефоны",
    "addr": "Алматы қ. Гоголь 211",
    "llp": "Ақ"
  }
}
</i18n>

<template>
	<div class="container">
		<div class="row">
			<div class="offset-md-1 col-md-3 col-3">
				<router-link to="/history" :active="$route.name=='History'" class="hidden-sm-down">
					<h4 class="text-center mt-5 spacer"><b>{{ $t('history')}}</b></h4>
				</router-link>
				<div class="hidden-md-up hamburger" @click="collapsed=!collapsed" :class="{ 'active': !collapsed }">
					<h5 class="text-center mt-5"><b><icon name="bars"></icon>&nbsp; {{ $t('menu')}}</b></h5>
				</div>
			</div>
			<div class="col-md-4 col-6">
				<router-link to="/"><p class="text-center">
					<img src="../assets/logo.png" alt="Logo" height="85" class="mt-4 hidden-xs-down">
					<img src="../assets/logo.png" alt="Logo" height="50" class="mt-4 hidden-sm-up">
				</p></router-link>
			</div>
			<div class="col-md-3 col-3">
				<router-link to="/brands" :active="$route.name=='Brands'">
					<h4 class="text-center mt-5 hidden-md-down spacer"><b>{{ $t('brands')}}</b></h4>
					<h5 class="text-center mt-5 hidden-lg-up"><b>{{ $t('brandsShort')}}</b></h5>
				</router-link>
			</div>
		</div>
		<div class="row menu" v-show="!collapsed">
			<ul class="list-unstyled w-100">
				<li class="text-center mt-3">
					<router-link to="/history" :active="$route.name=='History'" class="spacer" @click="collapsed=!collapsed">
						<b>{{ $t('history')}}</b>
					</router-link>
				</li>
				<li class="text-center"><img src="../assets/line.png" alt="line" width="60" style="opacity: .3;"></li>
				<li class="text-center mt-1">
					<router-link to="brands" :active="$route.name=='Brands'" class="spacer" @click="collapsed=!collapsed">
						<b>{{ $t('brands')}}</b>
					</router-link>
				</li>
				<li class="text-center"><img src="../assets/line.png" alt="line" width="60" style="opacity: .3;"></li>
				<li class="text-center mt-1">
					<router-link to="/main" :active="$route.name=='Main'" class="spacer" @click="collapsed=!collapsed">
						<b>{{ $t('gallery')}}</b>
					</router-link>
				</li>
			</ul>
			<ul class="list-unstyled pl-2 w-100 text-center small">
				<li><a href="tel:+77273779999">{{ $t('number1') }} +7 (727) 377 99 99</a></li>
				<li><a href="tel:+77273787487">{{ $t('number2') }} +7 (727) 378 74 87</a></li>
				<li><router-link to="/">{{ $t('addr') }}</router-link></li>
				<li><router-link to="/">{{ $t('llp') }} CASPIAN BEVERAGE HOLDING</router-link></li>
				<li><a href="mailto:CBH@sx.kz">CBH@sx.kz</a></li>
				<br>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['locale'],
		data(){
			return {
				collapsed: true
			}
		},
		watch: {
			locale(val){
				this.$i18n.locale = val
			}
		},
		filters: {
		  spacer: function (value) {
		    if (!value) return ''
		    value = value.toString().split(' ').join('\xa0')
		    return value.split('').join('\xa0\xa0')
		  }
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
	a[active], .active{
		color:#006eb9;
	}
	.spacer{
		letter-spacing: 3px;
	}
	.hamburger{
		cursor: pointer;
	}
	.menu{
		box-shadow: inset 0px -15px 30px -10px rgba(0,0,0,0.16);
	}
</style>