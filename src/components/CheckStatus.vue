<script>
import NavbarAdmin from './NavbarAdmin.vue'
import ParcelData from './ParcelData.vue'
import Axios from 'axios'


export default {
    
    name:"CheckStatus",
    components:{
        ParcelData,
        NavbarAdmin
    },
     data(){
        return{
            DataParcels:[]
            }
    },
     methods:{
        async getParcelData(){
           await Axios.get("http://localhost:9000/parcelCheck")
            .then(res => {this.DataParcels = res.data})
            .then(console.log(this.DataParcels));
        },
        async checkUpdateParcel(DataParcels){
            for (let i =0; i< DataParcels.length;i++){
                if(DataParcels[i].statusDelivered == true && DataParcels[i].returnDelivered == true){
                    alert(`รหัสพัสดุ:${DataParcels[i].parcel_id} ให้เลือกติ๊กแค่ช่องเดียวเท่านั้น! `)
                    return 'error';
                }
            }

            return DataParcels
        },
        async updateParcel(DataParcels){
            DataParcels = await this.checkUpdateParcel(DataParcels);
            if (DataParcels == 'error'){
                return false
            }
            
            await Axios.put("http://localhost:9000/parcelCheck",DataParcels)
            .then(res => console.log(res));
            
            alert("ข้อมูลถูกอัพเดทลงฐานข้อมูลแล้ว")
            location.reload();
        }

    }, mounted(){
        this.getParcelData();
        this.updateParcel();
    }
}


</script>

<template>
 <div class="container" >

        <div class="header" > <NavbarAdmin /> </div> 
        
        <div class="body">
            <center>
                <center><div class="head">ยืนยันสถานะพัสดุ</div></center>
                <br>
            <table id="CheckStatus" >
                <thead>
                    <tr>
                    <th>ลำดับ</th>
                    <th>รหัสพัสดุ</th>
                    <th>ชื่อ</th>
                    <th>นามสกุล</th>
                    <th><center>ตามกำหนด</center></th>
                    <th><center>เกินกำหนด</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ParcelData v-for = "item, index in DataParcels"
                    :key = "index">
                    <td>{{index+1}}</td>
                    <td>{{item.parcel_id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.surname}}</td>
                    <td><center><input v-model="item.statusDelivered" value="true" type="checkbox" />
                        <label for="asScheduled" ></label></center></td>
                    <td><center><input v-model="item.returnDelivered" value="true" type="checkbox" />
                        <label for="overdue"></label></center></td>
                    </tr>
                </tbody>
            </table>
            <div class="button">
                <button @click="updateParcel(DataParcels)" >บันทึกข้อมูล</button>
            </div>
            </center>
          
        </div>
    </div>
</template>


<style scoped>

input[type=radio] {
    border: 0px;
    width: 100%;
    height: 1.25em;
}
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
button{
    line-height: 0;
    margin: 36px 0;
    font:inherit;
    background: #4C4C6D;
    color:white;
    cursor: pointer;
    padding: 0.6rem 6.8rem;
    border-radius: 33px;
    position: sticky;
}
.button {
  position: sticky;
  bottom: 1rem;
  align-self: flex-end;
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