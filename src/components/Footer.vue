<template>
	<section class="footer color-brown u-center-text">
		<div class="footer-col u-left-text">
			<h2 class="heading-secondary">關於 沒有賣漢堡</h2>
			<p class="content-secondary u-margin-top-min">Curabitur lobortis id lorem id bibndum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. </p>
		</div>
		<div class="footer-col u-left-text">
			<h2 class="heading-secondary">聯絡方式</h2>
			<ul class="u-margin-top-min">
				<li><h2 class="content-secondary">•	高雄市中正五路到底</h2></li>
				<li><h2 class="content-secondary">•	+886 886 886</h2></li>
				<li><h2 class="content-secondary">•	test@gmail.com</h2></li>
			</ul>
		</div>
		<div class="footer-col u-right-text">
			<h1 class="big-title">沒有賣漢堡</h1>
		</div>
	</section>
</template>

<style lang="scss">
.footer {
	padding: 50px 0;
	
	&-col{
		vertical-align: top;
		display: inline-block;
		width: 300px;
		margin: 20px;
	}
}
.big-title {
	font-family: 'NotoSansCJKtc-Black';
	font-weight: 900;
	font-size: 49px;
	letter-spacing: 0px;
}

@media screen and (max-width: 480px) {
	.footer {
		&-col{
			margin: 20px 0;
		}
	}
}
</style>