<script>
import FormAddParcel from "./components/FormAddParcel.vue";
import CheckStatus from "./components/CheckStatus.vue";
import ParcelReturn from "./components/ParcelReturn.vue";
import ReturnFinish from "./components/ReturnFinish.vue";
import ParcelData from './components/ParcelData.vue'
import NavbarAdmin from "./components/NavbarAdmin.vue"
import Login from "./components/Login.vue"
import Register from './components/Register.vue'
import CollectParcel from "./components/CollectParcel.vue"
import OverdueParcel from './components/OverdueParcel.vue'
</script>

<template>
  <div class="font">
    <router-view/>
  </div>
</template>

<style>

@font-face {
  font-family: "LayijiMahaniyom";
  src: local("LayijiMahaniyom"),
   url("./assets/fonts/LayijiMahaniyom Bao.ttf") format("truetype");
}
.font{
    font-family: "LayijiMahaniyom";
    font-size: 25px;
}
body, * {
    margin: 0;
    padding: 0;
  }
</style>
