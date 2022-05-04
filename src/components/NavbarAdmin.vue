<template>
  <div>
    <ul>
    <div class="nav menu">
      <img src="logo.png" align="left">
      <li><router-link to="/FormAddParcel" > <h1>เพิ่มข้อมูลพัสดุ</h1></router-link></li>
      <li><router-link to="/CheckStatus"> <h1>ยืนยันสถานะพัสดุ</h1></router-link></li>
      <li><router-link to="/ParcelScheduled"> <h1>พัสดุที่มารับตามกำหนด</h1></router-link></li>
      <li><router-link to="/ReturnFinish"> <h1>พัสดุที่ส่งตีกลับเสร็จสิ้น</h1></router-link></li>
      <li><router-link to="/" @click="logout()"> <h1>ออกจากระบบ</h1></router-link></li>
    </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"NavbarAdmin",
    methods:{
      logout(){
        localStorage.setItem("currentLogin", null);
        window.location.href = "/#/Login"
        alert("คุณออกจากระบบแล้ว");
      }
    }
  }
</script>

<style scoped>

@font-face {
  font-family: "LayijiMahaniyom";
  src: local("LayijiMahaniyom"),
   url("../assets/fonts/LayijiMahaniyom Bao.ttf") format("truetype");
}


  h1 {
    font-family: "LayijiMahaniyom";
    font-weight: bold;
    font-size: 30px;
    line-height: 5px;
    color: #333333;
    margin-top: 30px;
  }

  .nav {
    width: 100vw !important;
    display:flex;
    justify-content: space-around;
    position:fixed;
    font-family: "MiPancake";
  }

  .menu{
    height: 80px;
    background: #D5D1EE;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  } 

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li {
    display: block;
    color: rgb(105, 105, 173);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li:hover {
    background-color: rgb(183, 184, 209);
}


</style>

