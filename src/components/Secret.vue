<template>
	<section class="secret color-brown">
		<div class="secret-heading">
			<h2 class="heading-secondary">客人總是在詢問</h2>
			<h2 class="heading-secondary">這麼無言的秘訣是什麼</h2>
		</div>
		<div class="secret-heading-line"></div>
		<div class="secret-block u-margin-top-big">
			<div class="secret-block-box" v-for="secret in secrets" :key="secret.index">
				<img class="img-circle u-margin-top-sm" :src="`${ publicPath }imgs/` + secret.imgName" :alt="secret.alt">
				<h2 class="content-primary u-margin-top-min">{{ secret.title }}</h2>
				<h2 class="content-primary u-left-text u-margin-top-min">{{ secret.content }}</h2>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Secret',
	data() {
		return {
			publicPath: process.env.BASE_URL,
			secrets: [
				{title: '塑膠做的蔬菜', alt:'vegetable', imgName: 'feature_1.png', content: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris.'},
				{title: '黑暗料理界廚師', alt:'chef', imgName: 'feature_2.png', content: 'Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.'},
				{title: '不小心打翻了', alt:'oops', imgName: 'feature_3.png', content: 'Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.'},
			]
		}
	}
}
</script>

<style lang="scss">
.secret {

	&-heading {
		position: relative;
		background:rgba(239,233,231,1);
		width: 225px;
		height: 70px;
		margin: 50px auto 0 auto;
		z-index:10;

		&-line {
			width: 460px;
			border: 1px solid;
			margin: -36px auto;
		}
	}
	&-block {

		&-box {
			display: inline-block;
			vertical-align: top;
			width: 260px;
			margin: 0 30px 50px 30px;
		}
	}
}
.img-circle {
  border-radius: 100%;
}

@media screen and (max-width: 980px) {
	.secret {
		&-block {
			&-box {
				width: 200px;
			}
		}
	}
}
@media screen and (max-width: 780px) {
	.secret {
		&-block {
			&-box {
				width: 260px;
			}
		}
	}
}
@media screen and (max-width: 480px) {
	.secret {
		&-heading {
			&-line {
				width: 0;
				display: none;
			}
		}
	}
}
</style>