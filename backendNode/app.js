const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const studentsRoutes = require('./routes/students')

const PORT = 3002;

const app = express();

//app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

app.use('/students', studentsRoutes);

app.use('/', (req,res) =>{
    res.json({message: 'ok'})
})


app.listen(PORT, () => {
    console.log('server started!')
});