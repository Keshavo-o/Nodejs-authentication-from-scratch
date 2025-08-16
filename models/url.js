const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const url_schema = new mongoose.Schema({    
    short_id:{
        type:String,
        unique:true,
        required:true
    },
    redirect_url:{
        type:String,
        required:true
    },
    click_count:{
        type:Number,
        default:0
    }//we can also set a default value
},{
    timestamps:true
})

const url = mongoose.model("URL", url_schema);

module.exports = url;