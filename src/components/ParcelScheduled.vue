<script>
import NavbarAdmin from './NavbarAdmin.vue'
import ParcelData from './ParcelData.vue'
import Axios from 'axios'
export default {
    name:"ParcelScheduled",
    components:{
        ParcelData,
        NavbarAdmin
    },
     data(){
        return{
            DataParcels:[ ]
        }
    },
    methods:{
        async getParcelScheduledData(){
            await Axios.get("http://localhost:9000/parcelScheduled")
            .then(res => {this.DataParcels = res.data})
            .then(console.log(this.DataParcels));
        },
    },mounted(){
        this.getParcelScheduledData()
    }
}
</script>

<template>
    <div class="container" >
        <div class="header" > <NavbarAdmin /> </div>

        <div class="body">
            <center>
                <center><div class="head">พัสดุที่มารับตามกำหนด</div></center>
                <br>
            <table id="ParcelScheduled">
                <thead>
                    <tr>
                    <th>ลำดับ</th>
                    <th>รหัสพัสดุ</th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ParcelData v-for = "item, index in DataParcels"
                    :key = "index">
                    <td>{{no = index+1}}</td>
                    <td>{{id = item.parcel_id}}</td>
                    <td>{{name = item.name}}</td>
                    <td>{{surname = item.surname}}</td>
                    </tr>
                </tbody>
            </table>
            </center>
        </div>
    </div>
</template>



<style scoped>
.container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: 
  "header header header"
  "body body body"
  "body body body";
  grid-template-columns: 120px 4fr 1fr;
  grid-template-rows: 160px 1fr 80px;

  background-image: url("/Background.png"); 
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.header {
  grid-area: header;
 
}
.body{
  width: 100;
  height: 100vh;
  grid-area: body;
}
table{
	width: 800px;
    vertical-align:bottom;
	border-collapse: collapse;
    border-radius: 22px;
	box-shadow:0 0 20px rgba(0,0,0,0.1);
	overflow:hidden;
}
th,td{
	padding: 15px;
	background-color: rgba(255,255,255,0.2);
	color:#000;
}
th{text-align: left;}
thead th{background-color: #bf9de2; }
tbody tr:hover{background-color: rgba(255,255,255,0.3);}
tbody td{position:initial;}
tbody td:hover:before{
	content: "";
	position:relative;
	left: 0;
	right: 0;
	top: -9999px;
	bottom: -9999px;
	z-index: -1;
	background-color: rgba(255,255,255,0.2);
}
.centered {  
 position: fixed;  
 top: 30%;  
 left: 50%;  
 transform: translate(-50%, -50%);  
}
input[type="checkbox"]+label{
    font-weight: normal;
}
.head{
    font-size: 40px;
    font-weight: 900;
    background-color: #8c70a8;
    color: white;
    padding: 10px;
    text-align: center;
    width: 300px;
    border-radius: 33px;
}
.head:hover {
    background-color: rgb(168, 123, 204);
}
</style>