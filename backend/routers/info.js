const express = require('express'),
    nseInfo = require('../models/info')
const router = new express.Router()

router.post('/info/onSearch', async(req, res) => {
    await nseInfo.findOne({name:req.body.companyName}, (error,response) => {
        console.log(response);
        if (error) {
            console.log(error.toString());
            res.status(503).send(error.toString());
        } else {
            res.status(200).send(response);
        }
    });          
})

module.exports = router