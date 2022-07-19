const fileLogic = require("./fileLogic");

const express = require("express");
const router = express.Router();

const multer = require('multer');
const upload = multer();


router.post('/upload',upload.single('fileName'),async (req,res)=>{
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
      const data = await userLogic.readFile(req.body.fileName);
      console.log(data);
      res.send(data);
    } catch (error) {
      res.send(error.message);
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      await userLogic.createFile(req.body.fileName);
      res.send("file has been created");
    } catch (error) {}
  });
  
  router.put("/", async (req, res) => {
    try {
      await userLogic.updateFile(req.body.fileName, req.body.value);
      res.send("done");
    } catch {}
  });
  
  router.delete("/", async (req, res) => {
    try {
        await userLogic.deleteFile(req.body.fileName);
        res.send("file has been deleted");
    } catch(error) {
      res.send(error.message);
    }
  });
  
  module.exports = router;
