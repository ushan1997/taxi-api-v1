const express = require('express');
const router = express.Router();
const Categories = require('../models/categories.model')


router.post('/add',async function (req, res){
    if(req.body){
        const categories = new Categories(req.body);
        await categories.save().then(data => {
            res.status(200).send({data: data}); 
        }).catch(err => {
            res.status(500).send({err: err.message});
        })
    }
})

router.get('/view',async (req,res)=>{
    await Categories.find({}).then(data => {
        res.status(200).send({data: data});
    }).catch(err => {
        res.status(500).send({err: err.message});
    })
})

router.get('/getVehicals',async (req,res)=>{
    await Categories.find({}).populate('vehicles', 'name code model type')
    .then(data => {
        res.status(200).send({data: data});
    }).catch(err =>{
        res.status(500).send({err: err.message});
    })
})

router.get('/getVehicalsfromId/:id',async (req,res)=>{
    if(req.params.id){
    await Categories.findById(req.params.id).populate('vehicles', 'name code model type')
    .then(data => {
        res.status(200).send({data: data.vehicles});
    }).catch(err =>{
        res.status(500).send({err: err.message});
    })
}
})

router.get('/test/:id',async (req,res)=>{
     await Categories.findById(req.params.id)
    .then(data=>{
        res.status(200).send({data: data.duration})
    }).catch(err =>{
        res.status(500).send({err: err.message});
    })
})
router.get('/getduration/:id',async(req, res)=>{
    await Categories.findById(req.params.id)
    .then(data => res.status(200).send({data: data.duration}))
    .catch(err => res.status(500).send({err: err.message}))
})

router.get('/:type/:duration' ,async (req,res)=>{
    await Categories.find({type:req.params.type,duration:req.params.duration})
    .then(data =>{
        res.status(200).send({data: data.duration})
    }).catch(err =>{
        res.status(500).send({err: err.message})
    })

})




module.exports=router;