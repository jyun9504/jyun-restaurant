<template>
	<div class="sign">
		<Slogan/>
		<div class="sign-block color-brown">
			<div class="sign-block-title">SIGN</div>
			<div class="sign-block-terms u-left-text">
				<p>就是這樣條款：</p>
				<p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui </p>
			</div>
			<div class="sign-block-box u-left-text">
					<label class="sign-block-label content-secondary">Email Address*</label>
					<input class="sign-block-input" type="email">
					<label class="sign-block-label content-secondary">Password*</label>
					<input class="sign-block-input" type="password" >
					<input class="sign-block-input" type="password" >
					<button class="sign-block-btn">註冊</button>
			</div>
		</div>
	</div>
</template>

<script>
import Slogan from '@/components/Slogan'

export default {
	name: 'Sign',
	components: {
		Slogan
	}
}
</script>

<style lang="scss">
.sign {
	&-block {
		position: relative;
		width: 620px;
		background: #EFE9E7;
		box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.16);
		margin: 0 auto;
		border-top: 3px solid #FF5E45;

		&-title {
			font-family: 'NotoSansCJKtc-Black';
			font-weight: bold;
			font-size: 18px;
			margin-top: 15px;
		}
		&-terms {
			display: inline-block;
			width: 285px;
			margin: 10px;
			font-family: 'Microsoft JhengHei';
		}
		&-box {
			display: inline-block;
			width: 285px;
			height: 250px;
			margin: 10px;
			vertical-align: top;
		}
		&-label {
			font-family: 'Microsoft JhengHei';
		}
		&-input {
			width: 100%;
			height: 32px;
			display: block;
			background: #FFFFFF;
			border: 1px solid #CCCCCC;
			box-shadow: inset 0px 1px 0px 0px #ECECEC;
			border-radius: 3px;
			margin: 6px auto 15px auto;
			font-size: 16px;
			padding-left: 5px;
		}
		&-btn {
			position: absolute;
			bottom: 15px;
			right: 15px;
			width: 125px;
			height: 32px;
			background: #F56C23;
			border-radius: 3px;
			color: #FFFFFF;
			font-size: 14px;
			cursor: pointer;
		}
	}
}

@media screen and (max-width: 620px) {
	.sign {
		&-block {
			width: 310px;
		}
	}
}
</style>