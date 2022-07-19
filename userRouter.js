const userLogic = require("./userLogic");

const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.get('/user',async (req,res)=>{
    try{
       const data =  userLogic.readUser();
       res.send(data);
    }catch(error){

    }
});

module.exports = router;
