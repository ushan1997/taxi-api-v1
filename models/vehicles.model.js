const mongoose = require('mongoose')
const vehiclesSchema = new mongoose.Schema({
    name:{type: String, required: true},
    code : {type: String, required: true},
    model :{type:String, required:true},
    type :{type :String, required:true},
    categories :[{type:mongoose.Schema.Types.ObjectId, required:false, ref :'categories'}]
});
const vehicles= mongoose.model('vehicles', vehiclesSchema);
module.exports =vehicles;