<template>

  <rectangle class="centered">
    <div1 class="form-control">
      <center>
        <h1>Login</h1>
       </center>
    </div1>

    <div class="form-control">
      <center>
          <input type="text" v-model.trim="userData.email" class="log" id="email" placeholder="E-mail" style="background: #4C4C6D">
       </center>
    </div>

    <div class="form-control">
      <center>
          <input type="password" v-model.trim="userData.password" class="log" placeholder="Password" style="background: #4C4C6D">
       </center>
    </div>

    <div>
      <center><button @click="checkLogin(userData)">Login</button></center>
    </div>
  
    <div2 class="control">
      <center>Don't have an account? &nbsp; <router-link to="/Register">Get Started </router-link></center>
    </div2>

  </rectangle>
</template>

<script>
import Axios from "axios"

export default {
  name:"Login",
  data(){
        return{
            userData:{
                email:"",
                password:"",
                account_type:""
            }
        }
    },
  methods:{
      async checkLogin(userData){
        if (
          (userData.email == '') || (userData.email == null )|| 
          (userData.password == '') || (userData.password == null) ){
          alert("กรุณาใส่ Email และ Password")

          return 0;
        }
        await Axios.post("http://localhost:9000/login",{
            email: userData.email,
            password: userData.password
            }).then(res => userData.account_type = res.data.account_type ).catch(err => console.log(err))
            
        if (userData.account_type == "admin"){
          localStorage.setItem("currentLogin", userData.email);
          localStorage.setItem("accountType", userData.account_type);
          alert(`คุณเข้าสู่ระบบด้วยบัญชี ${userData.email}`)
          window.location.href = "/#/FormAddParcel"
          
        }else if(userData.account_type == "user"){
          localStorage.setItem("currentLogin", userData.email);
          localStorage.setItem("accountType", userData.account_type);
          alert(`คุณเข้าสู่ระบบด้วยบัญชี ${userData.email}`)
          window.location.href = "/#/CollectParcel"
        }
        else{
          alert("Could not find email or password! Please enter again.")
          localStorage.setItem("currentLogin", null);
        }
      }
  }
}
</script>

<style>
h1 {
  top: 100%;
  font-family: 'Niramit';
  font-weight: 600;
  font-size: 100px;
  line-height: 10px;
  color: rgba(51, 51, 51, 0.85);

}
a {
    text-decoration: none;
    color: rgba(51, 51, 51, 0.85);
}

body {
  background-image: url("http://image.free.in.th/v/2013/id/220419022307.png");
}

.log{
    width: 60%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 13px;
    background-repeat: no-repeat;
    padding: 20px 20px 28px 30px;
    border-radius: 30px;
}
.form-control{
    margin: 0.5rem 2;
    padding: 0.5rem 1rem;
    border-radius: 15px;
}
.control{
    font-size: 18px;
}

button{
    font: 13;
    background: #251977;
    color:white;
    cursor: pointer;
    border-radius: 30px;
    
}
rectangle{
    margin:2rem auto;
    width: 40%;
    height: 60%;
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
