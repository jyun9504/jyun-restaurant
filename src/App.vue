<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Noto+Sans+TC:100&display=swap);
// @import url(https://db.onlinewebfonts.com/c/158f3680b112e3baa610155c4e573207?family=Microsoft+JhengHei);
// @font-face {
//   font-family: 'NotoSansCJKtc-Black';
//   src:  url('/assets/fonts/NotoSansCJKtc-Black.otf');
// }

html, body {
  font-family: 'Noto Sans TC';
}
</style>
