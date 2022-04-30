<template>
<div class="body">
    <NavbarAdmin />
    <form class="centered">
        <div class="form-control">
            <label for="name">ชื่อนักศึกษา</label>
            &nbsp;
            <input type="text" id="iname" v-model.trim="DataParcels.name" placeholder="ชื่อ" style="background: #4C4C6D"/>
            &nbsp;
            <label for="surname"></label>
            <input type="text" id="iname" v-model.trim="DataParcels.surname" placeholder="นามสกุล" style="background: #4C4C6D"/>
        </div>
        <div class="form-control">
            <label for="date">วันที่พัสดุมาถึง</label>
            &nbsp;
            <input type="date" class="iname" v-model.trim="DataParcels.date" placeholder="xx/xx/xxxx" style="background: #4C4C6D"/>
        </div>
        <div>
            <center><button>บันทึกข้อมูล</button></center>
        </div>
        <!--{{JSON.stringify(DataParcels)}}-->
  </form>
</div>
</template>

<script>
import NavbarAdmin from "./NavbarAdmin.vue";
export default {
    name:"FormAddParcel",
    components:{
        NavbarAdmin
    },
     data(){
        return{
            DataParcels:{
                name:"",
                surname:"",
                date:""
            }
        }
    }
}
</script>

<style scoped>
h1 {
  font-family: 'Niramit';
  font-weight: 550;
  font-size: 60px;
  line-height: 5px;
  color: rgba(51, 51, 51, 0.85);
}
a {
    text-decoration: none;
    color: rgba(51, 51, 51, 0.85);
}
#iname{
    width: 30%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 13px;
    background-repeat: no-repeat;
    padding: 12px 10px 12px 10px;
    border-radius: 15px;
}
.iname{
    width: 59%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 13px;
    background-repeat: no-repeat;
    padding: 12px 10px 12px 10px;
    border-radius: 15px;
}
form{
    margin:2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    background: #fff;
}
.form-control{
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    border-radius: 15px;
}
label{
    font-weight: bold;
}
.control{
    line-height: 0;
}
button{
    line-height: 0;
    margin: 36px 0;
    font:inherit;
    background: #251977;
    color:white;
    cursor: pointer;
    padding: 0.6rem 6.8rem;
    border-radius: 33px;

}
.centered {  
 position: fixed;  
 top: 50%;  
 left: 50%;  
 transform: translate(-50%, -50%);  
}
.body{
  background-image: url("/public/Background.png"); 
  width: 100;
  height: 100vh;
}
</style>

