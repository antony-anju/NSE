const mongoose = require('mongoose')

const info = new mongoose.Schema({
    marketCap: {
        type: String,
        required: true,
        trim: true
    },
    currentMarketPriceOfStock: {
        type: String,
        required: true,
        trim: true
    },
    dividentYield: {
        type: String,
        required: true,
        trim: true,
    },
    roce: {
        type: String,
        required: true,
        unique: true,
    },
    roe:{
        type :String,
        required:true,
    },
    EPS: {
        type: String,
        required: true,
        trim: true
    },
    Reserves: {
        type: String,
        required: true,
        trim: true
    }
})

const nseInfo = mongoose.model('info', info);

module.exports = nseInfo
