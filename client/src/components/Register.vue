<template>
  <rectangle_Re class="centered">
    <div1 class="form-control">
      <center>
        <h1>Register</h1>
       </center>
    </div1>

    <div1 class="form-control">
      <center>
          <input type="text" class="fname" id="firstnameEN" placeholder="Name" style="background: #4C4C6D">
          <input type="text" class="fname" id="surnameEN" placeholder="Surname" style="background: #4C4C6D">
          <input type="text" class="fname" id="firstnameTH" placeholder="ชื่อ" style="background: #4C4C6D">
          <input type="text" class="fname" id="surnameEN" placeholder="นามสกุล" style="background: #4C4C6D">
          <input type="text" class="lname" id="email" placeholder="E-mail" style="background: #4C4C6D">
          <input type="text" class="lname" id="password" placeholder="Password" style="background: #4C4C6D">
          <input type="text" class="lname" id="confirmPassword" placeholder="Confirm Password" style="background: #4C4C6D">
       </center>
    </div1>


    <div3 class="con">
      <center>
        <input type="checkbox" />
        <label>I agree that I use @fitm.kmutnb.ac.th email. </label>
       </center>
    </div3>

    <div3 class="con">
      <center>
        <input type="checkbox" />
        <label>I agree to the terms and conditions </label>
       </center>
    </div3>

    <div>
      <center><button>Sign up</button></center>
    </div>
  

  </rectangle_Re>
</template>

<script>
export default {
  name:"Register"

}
</script>

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
