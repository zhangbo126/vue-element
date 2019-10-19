<template>
  <div class="seller">
        <Top :topData="userid"></Top>
        <GoodsList :list="userid"></GoodsList>
        <Shop-cart></Shop-cart>     
  </div>
</template>
<script>

    import Top from '@/components/seller/top/Top'
    import ShopCart from '@/components/seller/shopCart/ShopCart'
    import GoodsList from '@/components/seller/goodList/GoodList'
    import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      showCart: true
    }
  },
  computed: {
     ...mapGetters(['userid'])
  },
  components: {
    Top,
    ShopCart,
    GoodsList
  },
  methods: {
    
  },

  
}
</script>
<style lang="stylus" scoped>
.seller {
  position:absolute;
  overflow: hidden;
  z-index: 99;
  height: 100%;
  width:100%;
  background-color: #fff;
  top:0;
  left:0;
}
</style>
