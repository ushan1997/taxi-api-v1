const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {mongo_url} = require('./dbconfig')
const vehicleRoutes = require('./routes/vehicles.routes')
//const vehiclesController = require('./controllers/vehicles.controller')
const categoriesController = require('./controllers/categories.controller')
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 8080 || process.env.PORT ;

mongoose.connect(mongo_url,{
    useNewUrlParser: true ,
    useUnifiedTopology : true
},(error) =>{
if(error){
    console.log("Database Error "+error.message)
}
});

function getValue(){
app.route('/').get((req, res)=>{
    res.send("dfdf")
})
}
getValue();

app.use('/vehicles',vehicleRoutes())
app.use('/categories',categoriesController)

mongoose.connection.once('open',() =>{
    console.log("Database Synced")
})

app.listen(PORT, ()=>{
    console.log("Server is running port "+PORT)
})
 

//Run code=> npm run nodemon