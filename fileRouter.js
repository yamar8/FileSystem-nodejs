const fileLogic = require("./fileLogic");

const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();


router.post('/upload',upload.single('fileName'),async (req,res)=>{
    try{
        fileLogic.saveFile(req.file)
    //   console.log(req.file.buffer);
      res.send("ok");
    }catch{
      res.status(400).json("error");
    }
  })

  module.exports = router;
