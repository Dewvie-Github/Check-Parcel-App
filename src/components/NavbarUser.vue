<template>
  <div>
    <ul>
    <div class="nav menu">
      <img src="../assets/logo.png" align="left">
      <li><router-link to="/"  @click="logout()" > <h2>ออกจากระบบ</h2></router-link></li>
      <li><router-link to="/OverdueParcel"> <h2>พัสดุเกินกำหนด</h2></router-link></li>
      <li><router-link to="/CollectParcel" ><h2>พัสดุที่ต้องไปรับ</h2></router-link></li>
      
    </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"NavbarUser",
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


  h2 {
    font-family: "LayijiMahaniyom";
    font-weight: bold;
    font-size: 30px;
    line-height: 5px;
    color: #333333;
    margin-top: 30px;
  }
 

  .nav {
    width: 100vw !important;
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
 ul {
    list-style-type: none;
    margin: 10;
    padding: 10;
    overflow: hidden;
    background-color: #333;
}

li {
    float: right;
}

li {
    display: block;
    color: rgb(105, 105, 173);
    text-align: center;
    padding: 23px 70px;
    text-decoration: none;
}

li:hover {
    background-color: rgb(183, 184, 209);
}

</style>

