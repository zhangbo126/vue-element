<template>
    
 <div class="Remmd">
  <div class="remmdtitle cl">
      <h2 class="fl">品质精选</h2>
      <span class="fr">更多</span>
  </div>
  <div class="remmdAD cl">
      <div class="remmdSelet fl" v-for="(remmd,index) in remmds" :key="index">
        <a :href="remmd.url">
            <img :src="remmd.imgUrl" alt="">
            <p>{{remmd.storeName}}</p>
        </a>
        <button>大牌精选</button>
      </div>
  </div>

 </div>

</template>
<script>

import {REMMD} from '@/api'

export default {
      data(){
          return{
              remmds:[

              ]
          }
      },
      created () {
          this.$axios({
              url:REMMD,
          }).then((res)=>{
               this.remmds=res.data
             
          })
      }

}
</script>
<style scoped lang="less">

  .Remmd{
      width: 100%;
      .remmdtitle{
          padding: 10px 2px;
          box-sizing: border-box;
          h2{
              color: orange;
          }
      }
      .remmdAD{
          width: 100%;
          margin-top: 30px;
          box-sizing: border-box;
          padding:10px 15px;
          .remmdSelet{
              width: 20%;
              padding: 0px 18px;
              a{
                  display: block;
                  p{
                      color: #333333;
                      width:100%;
                      overflow: hidden;
                      text-overflow:ellipsis;
                      white-space: nowrap;
                    margin: 20px 0px;
                  }
              }
              button{
                  width: 1.733333rem; /* 40/75 */
                  background-color:#ffffff;
                   color:#0099cc;
                   border: 1px solid #0099cc;
                   text-align: center;
                   line-height: 40px;
              }
          }
      }
  }


</style>