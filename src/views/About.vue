<template>
  <div class="about">
    <Secret/>
    <Chef/>
    <Reservation/>
  </div>
</template>

<script>
import Secret from '@/components/Secret'
import Chef from '@/components/Chef'
import Reservation from '@/components/Reservation'


export default {
  name: 'about',
  components: {
    Secret,
    Chef,
    Reservation
  }
}
</script>

<style lang="scss">

</style>
