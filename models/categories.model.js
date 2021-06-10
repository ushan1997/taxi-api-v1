const mongoose = require('mongoose')
const categoriesSchema = new mongoose.Schema({
    name : {type: String, required: true},
    type :{type:String, required:true},
    duration :{type :Number, required:true},
    vehicles :[{type:mongoose.Schema.Types.ObjectId, required:false,ref :'vehicles'}]
});
const categories= mongoose.model('categories', categoriesSchema);
module.exports =categories;