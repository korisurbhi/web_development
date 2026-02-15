const express = require('express');
const bodyParser = require('body-parser');
const student = require('./module/Student');
const mongoose  = require('mongoose');
const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/studentDB')
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.error('DB not connected:'+ err));  

app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/save', async (req, res)=>{
    
    const { rollNo, name, degree, city } = req.body;
    const data = new student({rollNo, name, degree, city
    });
    await data.save();

    res.redirect('/')
})

app.listen(port, ()=>{console.log(`Server is running on port : ${port}`)})

