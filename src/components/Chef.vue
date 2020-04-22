<template>
	<section class="chef u-center-text">
		<div class="chef-img"></div>
		<div class="chef-intro color-white-primary u-left-text">
			<h2 class="heading-secondary">今日主廚：帕瑪森、起司</h2>
			<p class="content-secondary u-margin-bottom-small">Today chef：Parmesan Cheese</p>
			<p class="content-secondary">Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.</p>
		</div>
	</section>
</template>

<style lang="scss">
.chef {
	position: relative;
	overflow: hidden;
	width: 100%;
	background: $color-brown;
	font-size: 0;

	&-img {
		display: inline-block;
		width: 470px;
		height: 470px;
		background-image: url('../assets/imgs/main_chef_brown.png');
		background-position: top center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	&-intro {
		width: 410px;
		display: inline-block;
		vertical-align: top;
		margin: 60px 0 0 25px;
	}
}
@media (max-width: 980px) {
	.chef {

		&-img {
			width: 373px;
		}
		&-intro {
			width: 330px;
		}
	}
}

@media (max-width: 727px) {
	.chef {

		&-img {
			width: 100%;
		}
		&-intro {
			width: 100%;
			padding: 30px;
			margin: 0;
		}
	}
}
</style>