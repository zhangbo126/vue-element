<template>
    <div class="take">
        <Top></Top>
        <Category></Category>
        <AD></AD>
        <Recommend></Recommend>
        <SellerList></SellerList>
    </div>
</template>



<script>

import AD from '@/components/home/take/Ad.vue'
import Category from '@/components/home/take/Category.vue'
import Recommend from '@/components/home/take/recommend.vue'
import Top from '@/components/home/take/top.vue'
import SellerList from '@/components/home/take/SellerList.vue'

export default {
    name:'Take',
    components: {
        AD,Category,Recommend,Top,SellerList
    }

}
</script>
<style scoped>

</style>