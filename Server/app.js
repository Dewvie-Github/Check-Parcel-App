const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const Parcel = require('./models/parcel');
const User = require('./models/user')
const app = express();
var cors = require('cors');
const bcrypt = require('bcrypt');
 
app.use(cors())


app.use(express.json());

//Use dotenv to read .env vars into Node
//Callbyy process.env.DATABASE_URL
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });




// Our Code
app.post("/collectParcel" , async(req,res) => {
  let user = req.body.currentLogin

  user = await User.find({email: user})
  user = user[0]

  const parcel = await Parcel.find({
    statusDelivered: false,
    returnDelivered: false
  });

  // find parcel that name TH and EN of user
  let userParcel = []
  for (let i =0; i < parcel.length; i++){
    if(
      (parcel[i].name == user.nameTH && parcel[i].surname == user.surnameTH) ||
      (parcel[i].name == user.nameEN && parcel[i].surname == user.surnameEN)
    ){
      userParcel.push(parcel[i]);
    }
  }
  res.status(200).json(userParcel)
})

app.post("/overdueParcel" , async(req,res) => {
  let user = req.body.currentLogin
  user = await User.find({email: user})
  user = user[0]

  const parcel = await Parcel.find({
    statusDelivered: false,
    returnDelivered: true
  });

  // find parcel that name TH and EN of user
  let userParcel = []
  for (let i =0; i < parcel.length; i++){
    if(
      (parcel[i].name == user.nameTH && parcel[i].surname == user.surnameTH) ||
      (parcel[i].name == user.nameEN && parcel[i].surname == user.surnameEN)
    ){
      userParcel.push(parcel[i]);
    }
  }
  res.status(200).json(userParcel)
})

app.get("/parcelCount" , async(req,res) => {
  const parcelCount = await Parcel.find({});
  res.json({
    "parcelCount": parcelCount.length
  })
})

app.get("/parcel" , async(req,res) => {
  const parcel = await Parcel.find({});
  res.json(parcel)
})

app.post("/parcel" , async(req,res) => {
  const payload = req.body;
  const parcel = new Parcel(payload);
  await parcel.save();
  res.json(parcel)
})

app.put("/parcel", async(req,res) => {
  const payload = req.body;
  
  const parcel = await Parcel.findOneAndUpdate({_id: payload._id}, {$set: payload});
  res.json(200)

}) 
app.get("/parcelCheck" , async(req,res) => {
  const parcel = await Parcel.find({ statusDelivered: false, returnDelivered: false})
  res.json(parcel)
})
app.put("/parcelCheck", async(req,res) => {
  const payload = req.body;
  for (let i=0; i < payload.length; i++){
    const parcel = await Parcel.findOneAndUpdate({_id: payload[i]._id}, { $set: payload[i] });
  }
  res.status(200).end()
}) 

app.get("/parcelScheduled" , async(req,res) => {
  const parcel = await Parcel.find({ statusDelivered: true, returnDelivered: false})
  res.json(parcel)
})

app.get("/parcelReturnFinish" , async(req,res) => {
  const parcel = await Parcel.find({ statusDelivered: false, returnDelivered: true})
  res.json(parcel)
})

// User
app.post("/user" , async(req,res) => {
  const payload = req.body;
  console.log(payload)

  // Hash password!
  payload.password = await hashPassword(payload.password)

  console.log(payload)

  const user = new User(payload);
  await user.save();
  res.json(user)
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email

  });
  if (user == null){
    res.status(400).end();
  }else{
    // compare password
    const match = await(checkPassword(user.password,password));

    if (match == false){
      res.status(400).end();
    }
    else if (user.email == "admin" && user.password == "1234") {
      res.status(200).json({account_type: "admin"});
      console.log(`${user.email} has login!`)
    }else if (match){
      res.status(200).json({account_type: "user"});
      console.log(`${user.email} has login!`)
  }
  }

  
});


const isCharThai = (text) => {
  for (let i ="ก".charCodeAt(0); i <= "ก".charCodeAt(0)+90; i++){
    if(text.charAt(0) === String.fromCharCode(i)){
      return true
    }
  }
  return false
}

const isCharEnglish = (text) => {
  for (let i ="A".charCodeAt(0); i <= "z".charCodeAt(0); i++){
    if(text.charAt(0) === String.fromCharCode(i)){
      return true
    }
  }
  return false
}



// HASH PASSWORD
async function hashPassword(password, saltRounds = 10) {
  try{
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    // เก็บ username และ hash ไว้ที่ database เช่น เก็บไว้ใน field username และ passwordHash ใน table user 
    console.log(hashedPassword)
    return hashedPassword
  }catch(err){
    console.log(err)
  }
}

async function checkPassword(hashedPassword, password) {
  // check is password match;
  const match = await bcrypt.compare(password, hashedPassword);
  if(match) { 
     return true
  }else return false;
}


// Our Code



app.listen(9000, () => {
  console.log('Application is running on port 9000');
});// server
