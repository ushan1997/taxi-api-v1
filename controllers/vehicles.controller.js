const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicles.model')


router.post('/add',async function (req, res){
    if(req.body){
        const vehicle = new Vehicle(req.body);
        await vehicle.save().then(data => {
            res.status(200).send({data: data}); 
        }).catch(err => {
            res.status(500).send({err: err.message});
        })
    }
})

router.get('/view',async (req,res)=>{
    await Vehicle.find({}).then(data => {
        res.status(200).send({data: data});
    }).catch(err => {
        res.status(500).send({err: err.message});
    })
})


router.get('/calculateAmount/:id',async (req,res)=>{
    if(req.params.id && req.params){
        let totalDuration = 0;
        const vehicle =await Vehicle.findById(req.params.id).populate('categories','duration')  
        console.log(vehicle.categories)
        if(vehicle.categories.length>0){
            vehicle.categories.map((category)=>{
                totalDuration += category.duration;
                console.log(totalDuration)
            })
        }
        totalDuration = totalDuration*10;
        res.status(200).send({ totalDuration})

    }
})

router.get('/',async(req,res)=>{
    console.log('Hi')
})


module.exports=router;