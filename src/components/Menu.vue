<template>
  <section class="menu">
		<div class="menu-list u-left-text">
			<div class="menu-box color-brown u-center-text" v-for="product in products" :key="product.index">
				<img class="menu-box-img" :src="`${ publicPath }imgs/` + product.product_img" :alt="product.alt">
				<h1 class="menu-box-title">{{ product.product_name }}</h1>
				<p class="menu-box-subTitle">{{ product.product_name_en }}</p>
				<div class="menu-box-line"></div>
				<em class="menu-box-price">${{ product.price }}</em>
				<button class="menu-box-addCartBtn">加入購物車</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Menu',
	props: [
    'products'
  ],
	data() {
		return {
			publicPath: process.env.BASE_URL,
		}
	},
	computed: {
		
	}
}
</script>

<style lang="scss">
.menu {
	display: inline-block;
	vertical-align: top;
	width: 720px;
	margin: 0 10px;

	&-box {
		width: 220px;
		height: 280px;
		background: #EFE9E7;
		box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.16);
		display: inline-block;
		margin: 10px;

		&-title {
			margin-top: 10px;
		}
		&-img {
			width: 220px;
			height: 90px;
		}
		&-line {
			width: 91px;
			border: 1px solid #3D1101;
			margin: 8px auto 20px auto;
		}
		&-price {
			font-weight: bold;
			font-size: 20px;
			color: #3D1101;
		}
		&-addCartBtn {
			margin: 16px auto;
			width: 200px;
			height: 28px;
			border: 2px solid #FF5E45;
			background: #EFE9E7;
			border-radius: 3px;
			font-size: 16px;
			color: #FF5E45;
			cursor: pointer;
		}
	}
}

@media screen and (max-width: 980px){
	.menu {
		width: 480px;
	}
}
@media screen and (max-width: 740px){
	.menu {
		width: 240px;
	}
}
</style>