<template>

 
  <mt-swipe :auto="45000" class="box">
    <mt-swipe-item v-for='(cates,index) in categ' :key='index'>
    <a :href="category.url" v-for='(category,i) in cates' :key='i'>
    <img :src="category.icon" alt="">
    <p>{{category.name}}</p>
    </a>
    </mt-swipe-item>
    </mt-swipe>

</template>
<script>
  // import {swiper,swiperSlide} from 'vue-awesome-swiper'
  // // import 'swiper/dist/css/swiper.css'
  //  import 'swiper/css/swiper.css'

  import {
    CATEGORY
  } from '@/api'

  export default {

    data() {
      return {
        categ: []
      }
    },
    created() {
      this.$axios({
        url: CATEGORY,

      }).then((res) => {
        this.categ = res.data
      })
    }

  }

</script>
<style scoped lang="stylus">
.box {
    height: 4.5rem
    width 100%
    text-align:center
}

a{
float left
display block
width 20%

padding: 5px;
box-sizing:border-box;
margin: 5px 0px;

}

img{
    width: 70%;
}
p{
    color: #333333;
}
  

</style>
