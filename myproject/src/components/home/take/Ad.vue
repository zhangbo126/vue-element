<template>
   
  <div class="box">
       <mt-swipe :auto="45000" >
       <mt-swipe-item  v-for="(img,index) in imgUrl" :key="index">
            <img :src="imgUrl[index]">
    </mt-swipe-item>
    </mt-swipe> 
  </div>

</template>
<script>
export default {
    data(){
        return{
            imgUrl:['/static/img/ad/ad.png','/static/img/ad/ad2.gif','/static/img/ad/ad3.jpg']
        }
    },  
}
</script>
<style scoped>
.box{
    height: 4.5rem;
    width: 100%;
}
img{
    width: 100%;
    height: 100%;
}

</style>