<template>
    <ul>
        <ParcelData
            v-for = "item, index in DataParcels"
            :key = "index"
            :no = "item.no"
            :id = "item.id"
            :name = "item.name"
        />
    </ul>
</template>

<script>
import ParcelData from './ParcelData.vue'
export default {
    name:"ListData",
    components:{
        ParcelData
    },
     data(){
        return{
            DataParcels:[
                {no:1, id:"00-00001", name:"Nutchanock", surname:"Wisuttiphun",
                dataReturn:"01-01-22", asScheduled:true, overdue:false},
                {no:2, id:"00-00002", name:"Saharat", surname:"Thongin",
                dataReturn:"02-01-22", asScheduled:true, overdue:false}
            ]
        }
    }
}
</script>

<style>

</style>