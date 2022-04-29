<template>
  <div class="container" >
    <div class="header" > <NavbarUser /> </div>
    <div class="body">
      <center>
      <table id="ReturnFinish">
        <thead>
            <tr>
            <th>ลำดับ</th>
            <th>รหัสพัสดุ</th>
            <th>วันที่พัสดุมาส่ง</th>
            <th>วันที่พัสดุถูกตีกลับ</th>
            </tr>
        </thead>
        <tbody>
            <tr ParcelData v-for = "item, index in DataParcels"
            :key = "index">
            <td>{{no = item.no}}</td>
            <td>{{id = item.id}}</td>
            <td>{{dateArrived = item.dateArrived}}</td>
            <td>{{dateReturn = item.dateReturn}}</td>
            </tr>
        </tbody>
      </table>
      </center>
    </div>

  </div>
</template>

<script>
import NavbarUser from './NavbarUser.vue'
import ParcelData from './ParcelData.vue'
export default {
    name:"CollectParcel",
    components:{
        ParcelData,
        NavbarUser
    },
     data(){
        return{
            DataParcels:[
                {no:1, id:"00-00001", name:"Nutchanock", surname:"Wisuttiphun",
                dateArrived:"01-01-22", dateReturn:"08-01-22", asScheduled:true, overdue:false},
                {no:2, id:"00-00002", name:"Saharat", surname:"Thongin",
                dateArrived:"01-01-22", dateReturn:"08-01-22", asScheduled:true, overdue:false},
                {no:3, id:"00-00003", name:"Wanvipar", surname:"Ruka",
                dateArrived:"01-01-22", dateReturn:"08-01-22", asScheduled:true, overdue:false}
            ]
        }
    }
}
</script>

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
</style>