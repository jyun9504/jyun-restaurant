<template>
	<section class="login">
		<Slogan/>
		<div class="login-box color-brown">
			<div class="login-box-title">LOGIN</div>
			<div class="u-left-text">
					<label class="login-box-label content-secondary">Email Address*</label>
					<input class="login-input" type="email">
					<label class="login-box-label content-secondary">Password*</label>
					<input class="login-input" type="password" >
			</div>
			<div class="login-btn">
					<button class="login-btn-sign">註冊</button>
					<button class="login-btn-login">登入</button>
			</div>
		</div>
	</section>
</template>

<script>
import Slogan from '@/components/Slogan'

export default {
	name: 'Login',
	components: {
		Slogan
	}
}
</script>

<style lang="scss">
.login {
	&-box {
		position: relative;
		width: 300px;
		height: 273px;
		background: #EFE9E7;
		box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.16);
		margin: 0 auto;
		padding: 15px;
		border-top: 3px solid #FF5E45;
		
		&-title {
			font-family: 'NotoSansCJKtc-Black';
			font-weight: bold;
			font-size: 18px;
		}

		&-label {
			font-family: 'Microsoft JhengHei';
		}
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

		&-sign {
			width: 125px;
			height: 32px;
			background: rgba(0,0,0,0.35);
			border-radius: 3px;
			margin-right: 20px;
			color: #FFFFFF;
			font-size: 14px;
			cursor: pointer;
		}
		&-login {
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
</style>