const fileLogic = require("./fileLogic");
const {isValid} = require('./fileLogic')

const express = require("express");
const router = express.Router();

const multer = require('multer');
const upload = multer();


router.post('/upload', upload.single('fileName'),async (req,res)=>{
    console.log(req.body);
    try{
        fileLogic.saveFile(req.file)
    //   console.log(req.file.buffer);
      res.send("ok");
    }catch{
      res.status(400).json("error");
    }
  });

router.get("/", async (req, res) => {
    try {
      const data = await fileLogic.readFile(req.body.fileName);
      console.log(data);
      res.send(data);
    } catch (error) {
      res.send(error.message);
    }
  });
  
  router.post("/",isValid,async (req, res) => {
      try {
          await fileLogic.createFile(req.body.fileName,req.body.value);
      res.send("file has been created");
    } catch (error) {
        res.send(error.message);
    }
  });
  
  router.put("/", async (req, res) => {
    try {
      await fileLogic.updateFile(req.body.fileName, req.body.value);
      res.send("done");
    } catch {
        res.send(error.message);
    }
  });
  
  router.delete("/", async (req, res) => {
    try {
        await fileLogic.deleteFile(req.body.fileName);
        res.send("file has been deleted");
    } catch(error) {
      res.send(error.message);
    }
  });
  

  module.exports = router;
