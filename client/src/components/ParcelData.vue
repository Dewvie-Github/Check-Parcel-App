<template>
  <h1>ชื่อ : {{name}} นามสกุล : {{surname}} วันที่พัสดุมาถึง : {{date}}</h1>
</template>

<script>
export default {
    name:"ParcelData",
    props:{
        no:{
            type:Number
        },
        id:{
            type:String
        },
        name:{
            type:String,
            required:true
        },
        surname:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        dateReturn:{
            type:String,
            required:true
        },
        asScheduled:{
            type:Boolean
        },
        overdue:{
            type:Boolean
        }
    }
}
</script>

<style>

</style>