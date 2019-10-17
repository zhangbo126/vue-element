<template>
  <div class="hello">
   
   <Pub :max="max" :v="v"></Pub>
  </div>
</template>

<script>

import Pub from '../base/pub.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      max:4,
      v:2,
    }
  },
  components: {
    Pub
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
