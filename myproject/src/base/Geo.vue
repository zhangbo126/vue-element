<template>
    <span>{{location}}</span>
</template>

<script>

export default {
    data(){
        return{
            location:''
        }
    },
    created () {
        let geolaction = new BMap.Geolocation()
        geolaction.getCurrentPosition((r)=>{
            let p = new BMap.Point(r.point.lng,r.point.lat)
            let myGeo = new BMap.Geocoder()
            myGeo.getLocation(p,(result)=>{
                if(result){
                    this.location=result.address
                }
            })
        })
    }
}
</script>

<style scoped>

</style>