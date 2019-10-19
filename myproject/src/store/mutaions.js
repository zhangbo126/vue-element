import * as types  from './mutaions-type'
import { SELLER } from '../api'

export default{
    [types.UPDATE_INTEGRAL](state,newInteral){
        state.UPDATE_INTEGRAL+=newInteral
    },
    [types.ADD_COUPON](state,coupon){
        state.coupon.push(coupon)
    },
    // 将对 商家 的数据 保存到 vuex 中
    [types.ADD_SELLES](state,selles){      
        state.seller = selles.seller
       // localStorage.setItem("users",selles.seller)
    },
    [types.ADD_SHOPPCART](state,shoppcart){
           
        //   let s =JSON.stringify(shoppcart)            
        //   state.shoppCart+=JSON.parse(s)
        //   console.log(state.shoppCart)
        
        // console.log(state.shoppCart) 

    }

}
