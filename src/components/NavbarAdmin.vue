<template>
  <div>
    <div class="nav menu">
      <img src="/logo.png" align="left">
      <router-link to="/FormAddParcel" > <h1>เพิ่มข้อมูลพัสดุ</h1></router-link>
      <router-link to="/CheckStatus"> <h1>ยืนยันสถานะพัสดุ</h1></router-link>
      <router-link to="/ParcelReturn"> <h1>พัสดุที่ต้องส่งตีกลับ</h1></router-link>
      <router-link to="/ReturnFinish"> <h1>พัสดุที่ส่งตีกลับเสร็จสิ้น</h1></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name:"NavbarAdmin"
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
    margin-top: 35px;
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


</style>

