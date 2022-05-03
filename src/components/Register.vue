<script>
import Axios from "axios"

export default {
  name:"Register",
  data(){
        return{
            userData:{
                nameTH:"",
                surnameTH:"",
                nameEN:"",
                surnameEN:"",
                email:"",
                password:"",
                confirmPassword:"",
                checked1: false,
                checked2: false
            }
        }
    },
  methods:{
      async createUser(userData){
        if (userData.password != userData.confirmPassword){
          alert("รหัสผ่านไม่ตรงกัน โปรดกรอกใหม่อีกครั้ง")
          return 0;
        }else if (
          userData.nameTH == "" || userData.surnameTH == "" ||
          userData.nameEN == "" || userData.surnameEN == "" ||
          userData.email == "" || userData.password == "" || userData.confirmPassword == "" ||
          userData.checked1 == false || userData.checked2 == false
        ){
          alert ("กรุณาใส่ข้อมูลทุกช่อง และครบถ้วน")
          return 0;
        }else{
          await Axios.post("http://localhost:9000/user",{
            nameTH: userData.nameTH,
            surnameTH: userData.surnameTH,
            nameEN: userData.nameEN,
            surnameEN: userData.surnameEN,
            email: userData.email,
            password: userData.password
            }).then(res => console.log(res)).catch(err => console.log(err))
          alert("สมัครเสร็จสิ้น ไป Login ได้เลย")
          window.location.href = "/#/Login" 
        }
      }  
    }
  

}
</script>

<template>
  <rectangle_Re class="centered">
    <div1 class="form-control">
      <center>
        <h1>Register</h1>
       </center>
    </div1>

    <div1 class="form-control">
      <center>
          <input type="text" class="fname" v-model.trim="userData.nameEN" id="nameEN" placeholder="Name" style="background: #4C4C6D">
          <input type="text" class="fname" v-model.trim="userData.surnameEN" id="surnameEN" placeholder="Surname" style="background: #4C4C6D">
          <input type="text" class="fname" v-model.trim="userData.nameTH" id="nameTH" placeholder="ชื่อ" style="background: #4C4C6D">
          <input type="text" class="fname" v-model.trim="userData.surnameTH" id="surnameEN" placeholder="นามสกุล" style="background: #4C4C6D">
          <input type="text" class="lname" v-model.trim="userData.email" id="email" placeholder="E-mail" style="background: #4C4C6D">
          <input type="password" class="lname" v-model="userData.password" id="password" placeholder="Password" style="background: #4C4C6D">
          <input type="password" class="lname" v-model="userData.confirmPassword" id="confirmPassword" placeholder="Confirm Password" style="background: #4C4C6D">
       </center>
    </div1>


    <div3 class="con">
      <center>
        <input v-model="userData.checked1" value="false" type="checkbox" required />
        <label> I agree that I use @fitm.kmutnb.ac.th email. </label>
       </center>
    </div3>

    <div3 class="con">
      <center>
        <input v-model="userData.checked2" value="false" type="checkbox" required />
        <label>  I agree to the terms and conditions </label>
       </center>
    </div3>

    <div2 class="control">
      <center>Already have an account? &nbsp; <router-link to="/Login"> Go to Login </router-link></center>
    </div2>

    <div>
      <center> <button @click="createUser(userData)">Sign up</button></center>
    </div>
  

  </rectangle_Re>
</template>



<style>
h1 {
  font-family: 'Niramit';
  font-weight: 550;
  font-size: 60px;
  line-height: 5px;
  color: rgba(51, 51, 51, 0.85);
  margin: 1rem
}


body {
  background-image: url("http://image.free.in.th/v/2013/id/220419022307.png");
}
.fname{
    width: 35%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 13px;
    background-repeat: no-repeat;
    padding: 15px 20px 15px 20px;
    border-radius: 20px;
    margin: 0.3rem
}
.lname{
    width: 70%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 13px;
    background-repeat: no-repeat;
    padding: 15px 20px 15px 20px;
    border-radius: 20px;
    margin: 0.3rem
}
.form-control{
    margin: 0.5rem 2;
    padding: 0.5rem 0.5rem;
}
.con{
    font-size: 17px;
    color: rgb(117, 117, 117);
}

button{
    margin: 36px 0;
    font: 30;
    background: #251977;
    color:white;
    cursor: pointer;
    padding: 1.5rem 10rem;
    border-radius: 30px; 
}
rectangle_Re{
    margin:2rem auto;
    width: 40%;
    height: 80%;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    background: rgba(255, 255, 255, 0.146);
}
.centered {  
 position: fixed;  
 top: 45%;  
 left: 50%;  
 transform: translate(-50%, -50%);  
}

</style>
