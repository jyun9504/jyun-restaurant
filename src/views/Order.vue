<template>
  <section class="order">
    <MenuSelect/>
    <Menu :products="products" />
  </section>
</template>

<script>
import MenuSelect from '@/components/MenuSelect'
import Menu from '@/components/Menu'

export default {
  name: 'Order',
  components: {
    MenuSelect,
    Menu
  },
  data() {
    return {
      products: [
				{product_name: '經典塑膠漢堡', alt: '', product_name_en: 'Classic Hamburger', price: '10', product_img: 'product_1.png'},
				{product_name: '漢堡三兄弟', alt: '', product_name_en: 'Three Hamburg Bro', price: '29', product_img: 'product_3.png'},
				{product_name: '全灑出來套餐', alt: '', product_name_en: 'Surprise Package', price: '999', product_img: 'product_4.png'},
				{product_name: '隱腸', alt: '', product_name_en: 'Hidden Sausage', price: '99,999', product_img: 'product_2.png'}
			]
    }
  }
}
</script>

<style lang="scss">
.order {
  margin-top: 48px;
}
</style>
