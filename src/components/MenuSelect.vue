<template>
	<section class="menuSelect color-brown">
		<h1 class="menuSelect-title heading-secondary">線上訂購美食</h1>
		<ul class="menuSelect-list u-left-text">
			<li class="menuSelect-li" :class="{'menuSelect-active': menuActive.all}">
				<a @click="changeMeunActive('all')">全部 (4)</a>
			</li>
			<li	class="menuSelect-li" :class="{'menuSelect-active': menuActive.ham}">
				<a @click="changeMeunActive('ham')">塑膠漢堡 (2)</a>
			</li>
			<li class="menuSelect-li" :class="{'menuSelect-active': menuActive.set}">
				<a @click="changeMeunActive('set')">塑膠套餐 (1)</a>
			</li>
			<li class="menuSelect-li" :class="{'menuSelect-active': menuActive.hidden}">
				<a @click="changeMeunActive('hidden')">隱藏美食 (1)</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'MenuSelect',
	data() {
		return {
			menuActive: { all: true, ham: false, set: false, hidden: false}
		}
	},
	methods: {
	}
}
</script>

<style lang="scss">
.menuSelect {
	display: inline-block;
	width: 220px;
	margin: 0 10px 50px 10px;

	&-list {
		margin-top: 16px;
	}
	&-li {
		width: 220px;
		border-bottom: 1px solid;
		line-height: 32px;
		cursor: pointer;
		padding-left: 5px;
	}
	&-active {
		background-color: #3D1101;
		font-size: 16px;
		color: #FFFFFF;
		line-height: 32px;
	}
}

</style>