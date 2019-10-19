<template>
  <div class="box">
    <div id="shoplist-title" class="shoplist-title">推荐商家</div>
    <ul class="seller-list">
      <li class="list-item" v-for="seller in sellers" @click="sellerH(seller)">
        <div class="logo">
          <img :src="'/'+seller.logo">
        </div>
        <div class="detail">
          <h3 class="name">{{seller.name}}</h3>
          <div class="rating">
            <!-- <Star :value="seller.rating"></Star> -->
            <Rate :values="seller.rating" class="rate"></Rate>
            <!-- <span>{{seller.rating}}</span> -->
            <span>月售{{seller.orderNo}}单</span>
          </div>
          <div class="fee">
            <span>&yen;{{seller.sendFee}}起步</span>
            <span>配送费&yen;{{seller.deliveryFee}}</span>
            <span>&yen;{{seller.avgFee}}/人</span>
          </div>
          <div class="activity cl">
                <span class="fr icon-take icon-jiantou"><i>{{seller.discount.length}}个活动</i></span>
            <div  v-for="(act,i) in seller.discount" class="fl">
                <p class="fl">{{act.content}},{{act.content}}</p>
               
             </div>
          </div>    
        </div>          
      </li>
    
    </ul>
  </div>
</template>
<script>
  import {
    SELLER
  } from '@/api'
  
  import Rate from '@/base/Rate'

//   import Keep from '../base/Keep.vue'
  export default {

    data() {
      return {
        sellers: []
      }
    },
   methods:{
     sellerH(seller){  
       //将当前商品数据存储到本地会话 
       localStorage.setItem('users',JSON.stringify(seller))
        this.$store.commit({
            type:'addSelles',
            seller:seller,
        })  
        this.$router.push('/seller')
     }
   },
    created() {
      this.$axios({
        url: SELLER,
      }).then((res) => {
           //console.log(res.data.discount)     
        this.sellers = res.data
        
      })

    },
    components: {
        Rate,
    }

  }

</script>

<style scoped lang="stylus">
.box {
margin-top: 0.133333rem /* 10/75 */;
.seller-list {
background-color: #fff;
position: relative;
min-height: 300px;
.list-item {
display: flex;
padding: 0.4rem 0;
font-size: 0.293333rem;
border-bottom: 0.013333rem solid #eee;
a {
display: flex;
color: #333;
}
.logo {
flex: none;
width: 1.733333rem;
height: 1.733333rem;
padding: 0 0.266667rem;
img {
display: block;
width: 100%;
height: 100%;
border-radius: 0.053333rem;
border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}
}
.detail {
flex: 1;
padding-left: 0.266667rem;
display: flex;
text-align: left;
flex-direction: column;
justify-content: space-around;
.h3 {
font-size: 0.4rem;
}
div {
color: #666;
}
}
}
}
.shoplist-title {
display: flex;
align-items: center;
justify-content: center;
height: 0.96rem;
font-size: 0.4rem;
color: #000;
&::before,
&::after {
display: block;
content: "";
width: 0.53333rem;
height: 0.026667rem;
background-color: #999;
}
&::before {
margin-right: 0.346667rem;
}
&::after {
margin-left: 0.346667rem;
}
}
}

.rate{
    padding: 10px 0px;
}
.activity{
    padding: 15px 0px;
}

</style>
