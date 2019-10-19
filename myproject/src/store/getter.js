import { SELLER } from "../api";

export default{
    user(state){
        return state.user
    },
    
    phone(state){
        let p = state.user.phone
        return p.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");        
    },
    
    money(state){
        return state.user.wallet     
    },
    
    seller(state){
        return state.user
    },
   
    userid(state){
        return state.seller
    }, 
    shoppCart(state){
         
        return state.shoppCart
    }
      
}