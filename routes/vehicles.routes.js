const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicles.controller')

module.exports =function(){
    router.post('/add',controller.createVehicle);
    router.get('/view',controller.getVehicals);
    router.get('/calculateAmount/:id',controller.calculateAmount);
    router.delete('/deleteById/:id',controller.deleteVehicle);
    router.put('/updateById/:id',controller.updateVehicle);
    router.get('/getVehicleById/:id',controller.getVehicleById)

    return router;
}