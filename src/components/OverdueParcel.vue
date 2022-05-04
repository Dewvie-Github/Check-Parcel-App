<script>
import NavbarUser from './NavbarUser.vue'
import ParcelData from './ParcelData.vue'
import Axios  from 'axios'
export default {
    name:"OverdueParcel",
    components:{
        ParcelData,
        NavbarUser
    },
     data(){
        return{
            DataParcels:[

            ]
        }
    },
    methods:{
        async getOverdueParcelData(){
          await Axios.post("http://localhost:9000/overdueParcel", 
          {
            currentLogin: window.localStorage.getItem("currentLogin") 
            }).then(res => {this.DataParcels = res.data})
        },
        arriveDate(date){
          const fDate = new Date(date);
          return `${fDate.getDate()}/${fDate.getMonth()}/${fDate.getFullYear()}`;
        },
        returnDate(date){
          const myDate = new Date(date).getTime();
          const nextWeekDate = myDate + (1000 * 60 * 60 * 24 * 7);

          const fDate = new Date(nextWeekDate);
          return `${fDate.getDate()}/${fDate.getMonth()}/${fDate.getFullYear()}`;
        }
    }, mounted(){
        this.getOverdueParcelData()
    }
}
</script>

<template>
  <div class="container" >
    <div class="header" > <NavbarUser /> </div>
    <div class="body">
      <center>
        <div class="head">พัสดุเกินกำหนด</div>
        <br>
      <table id="ReturnFinish">
        <thead>
            <tr>
            <th>ลำดับ</th>
            <th>รหัสพัสดุ</th>
            <th>วันที่พัสดุถูกตีกลับ</th>
            </tr>
        </thead>
        <tbody>
            <tr ParcelData v-for = "item, index in DataParcels"
            :key = "index">
            <td>{{no = index+1}}</td>
            <td>{{id = item.parcel_id}}</td>
            <td>{{dateReturn = returnDate(item.date)}}</td>
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
	padding: 2%;
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