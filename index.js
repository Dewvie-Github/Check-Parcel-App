const express = require('express');


const app = express();

// app เป็นobject และมี function ชื่อเดียวกับ HTTP Method 
// `.get()` เหมือนกับ GET
app.get('/', function (req, res) {
  res.send('Hello World');
});

// Dynamic หรือ group path ที่มันมี pattern เหมือนๆกัน
// req.params คือค่าที่สามารถดึงมาได้
app.get('/users/:name', (req, res) => {
  res.send(`users: ${req.params.name}`);
});

//
app.get('/users', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    // const { name, email } = req.query;
    
    res.send(`Ahoy! ${name}`);
  });

// server
app.listen(3000);
