<template>
   <div>
  <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}"
  >
</el-rate>

   </div>

</template>

<script>
 export default {
    data() {
      return {
        value: 4.7
      }
    },
    props: {
      values:Number,
    },
    created () {
       this.value=this.values
    }
  
  }
</script>

<style scoped>

</style>