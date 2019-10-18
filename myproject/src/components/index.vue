<template>
  <div class="hello">
   <keep-alive>
<component :is="component"></component>

   </keep-alive>
   <button @click="component='keep-tem'">keep-tem</button>
   <button @click="component='pub-tem'">pub-tem</button>
  </div>
</template>

<script>

import Pub from '../base/pub.vue'
import Keep from '../base/Keep.vue'

export default {
  name: 'index',
  data () {
    return {
      component:"pub-tem",
      msg: 'Welcome to Your Vue.js App',
      max:4,
      v:2,
    }
  },
  components: {
    "pub-tem":Pub,
    "keep-tem":Keep
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
