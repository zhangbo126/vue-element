import Vue from 'vue'

Vue.filter('money', (value) => { 
    return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
})



Vue.filter('savePhone', (phone) => {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");        
})


Vue.filter('userId',(id)=>{

// return id==


})