<template>
    
    <div>
<el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  :max="3"
  score-template="{value}">

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
    props: ['max','v']
}
</script>

<style scoped>



</style>