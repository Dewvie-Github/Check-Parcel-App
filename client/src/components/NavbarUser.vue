<template>
  <div>
    <div class="nav menu">
      <img src="/logo.png" align="left">
      <router-link to="/CollectParcel" > <h1>พัสดุที่ต้องไปรับ</h1></router-link>
      <router-link to="/OverdueParcel"> <h2>พัสดุเกินกำหนด</h2></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name:"NavbarUser"
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
    position: fixed;  
    top: 8%;  
    left: 85%;  
    transform: translate(-50%, -50%); 
  }
  
  h2 {
    font-family: "LayijiMahaniyom";
    font-weight: bold;
    font-size: 30px;
    line-height: 5px;
    color: #333333;
    margin-top: 35px;
    position: fixed;  
    top: 8%;  
    left: 70%;  
    transform: translate(-50%, -50%); 
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

  img{
    width: 5%;
    position: fixed;  
    top: 50%;  
    left: 7.9%;  
    transform: translate(-50%, -50%); 
 }


</style>

