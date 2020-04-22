<template>
  <header class="header">
      <div class="nav">
        <router-link class="link-style color-white" to="/"><p class="main-title">沒有賣漢堡</p></router-link>
        <ul class="nav-list">
          <li><router-link class="link-style color-white" to="/order">菜單</router-link></li>
          <li><router-link class="link-style color-white" to="/login">登入</router-link></li>
          <li><router-link class="link-style color-white" to="/sign">註冊</router-link></li>
        </ul>
      </div>
      <div class="banner-block color-white">
        <p class="sub-title heading-primary">咬一口</p>
        <p class="sub-title heading-primary">就無法忘懷的漢堡</p>
        <div class="sub-title-body">
          <p>你絕對無法吃到的好滋味</p>
          <p>因為沒有賣</p>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 420px;
  background-image: url(../assets/imgs/header_desktop.png);
  background-position: top center;
  position: relative;
}
.main-title {
  display: inline;
  font-family: 'NotoSansCJKtc-Black';
  font-weight: 900;
  font-size: 24px;
  line-height: 24px;
  position: absolute;
  top: 16px;
  left: 42px;
}
.nav {
  display: block;
  height: 56px;
  background: rgba(0,0,0,0.75);

  &-list {
    display: inline-block;
    right: 33px;
    top: 18px;
    position: absolute;
    
  }
  &-list li {
    display: inline;
  }
}
.link-style {
  font-size: 16px;
  text-decoration: none;
  margin: auto 15px;
}
.sub-title {
  display: inline;

  &-body {
    margin: 16px auto 26px auto;
  }
}
.banner-block {
  width: 460px;
  padding:20px;
  background: rgba(0,0,0,0.35);
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 500px) {
  .header {
    background-image: url(../assets/imgs/header_mobile.png);
    background-position: top center;
  }
	.banner-block {
    width: 100%;
  }
  .main-title {
    left: 16px;
  }
  .nav-list{
    right: 15px;
  }
  .link-style {
    margin: auto 5px;
  }
  .sub-title {
    display: block;
  }
}
</style>
