<template>
	<section class="reservation">
		<div class="reservation-heading u-margin-top-mid color-brown">
			<h2 class="heading-secondary">我們店其實沒有座位</h2>
			<h2 class="heading-secondary">要不要先訂位呢？</h2>
		</div>
    <div class="reservation-block u-margin-top-mid u-margin-bottom-medium">
			<div class="map-img"></div>
			<div class="reservation-box u-left-text color-brown">
				<div class="field" v-for="input in inputs" :key="input.index">
						<label class="content-secondary">{{input.label}}</label>
						<input class="reservation-input" :type="input.type" :placeholder="input.placeholder">
				</div>
				<label class="content-secondary">是否需要素食</label>
				<div class="field">
						<label class="content-secondary">是</label>
						<input class="reservation-input-radio"  type="radio" name="vegetarian">
						<label class="content-secondary">否</label>
						<input class="reservation-input-radio"  type="radio" name="vegetarian">
				</div>
				<div class="btn-group">
						<button class="btn-group-cancel">取消</button>
						<button class="btn-group-sent">訂位</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Reservation',
	data() {
		return {
			inputs: [
				{label: '姓名', type: 'text', placeholder: '阿諾史瓦辛格', name: 'name'},
				{label: '電話', type: 'text', placeholder: '0912345678', name: 'phone'},
				{label: '信箱', type: 'email', placeholder: 'test@gmail.com', name: 'email'},
				{label: '人數', type: 'text', placeholder: '', name: 'people'},
			]
		}
	}
}
</script>

<style lang="scss">
.reservation {
	overflow: hidden;
	background: rgba(250,250,250,0.70);

	&-box {
		padding: 0 10px;
		vertical-align: top;
		display: inline-block;
		width: 460px;
		height: 386px;
		position: relative;
	}
}
.map-img {
	display: inline-block;
	width: 460px;
	height: 386px;
	background-image: url('../assets/imgs/Map@2x.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.reservation-input {
	width: 100%;
	height: 32px;
	display: block;
	background: #FFFFFF;
	border: 1px solid #CCCCCC;
	box-shadow: inset 0px 1px 0px 0px #ECECEC;
	border-radius: 3px;
	margin: 6px 0;
	font-size: 16px;
	padding-left: 5px;

	&-radio {
		display: inline-block;
		margin: auto 18px auto 6px;
	}
}
.btn-group {
	position: absolute;
	right: 10px;
	bottom: 0;

	&-cancel {
		width: 70px;
		height: 32px;
		background: rgba(0,0,0,0.35);
		border-radius: 3px;
		margin: 10px;
		color: #FFFFFF;
		font-size: 14px;
		cursor: pointer;
	}

	&-sent {
		width: 70px;
		height: 32px;
		background: #F56C23;
		border-radius: 3px;
		color: #FFFFFF;
		font-size: 14px;
		cursor: pointer;
	}
}

@media screen and (max-width: 500px) {
	.map-img {
		width: 100%;
	}
	.reservation-box {
		width: 100%;
	}
}
</style>