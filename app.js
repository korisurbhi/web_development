const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



app.get('/', (req, res)=>{
    // console.log("hello js");
    res.render('index');
});

app.post('/save', (req, res)=>{
    console.log(req.body);
    res.redirect('/')
})

app.listen(port, ()=>{console.log(`Server is running on port : ${port}`)})

