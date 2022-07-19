const userLogic = require("./userLogic");

const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();

// router.get('/user',async (req,res)=>{
//     try{
//        const data =  userLogic.readUser();
//        res.send(data);
//     }catch(error){

//     }
// });

router.get("/user/", async (req, res) => {
  try {
    const data = await userLogic.readFile(req.body.fileName);
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/user/", async (req, res) => {
  try {
    await userLogic.createFile(req.body.fileName);
    res.send("file has been created");
  } catch (error) {}
});

router.put("/user", async (req, res) => {
  try {
    await userLogic.updateFile(req.body.fileName, req.body.value);
    res.send("done");
  } catch {}
});

router.delete("/user", async (req, res) => {
  try {
      await userLogic.deleteFile(req.body.fileName);
      res.send("file has been deleted");
  } catch(error) {
    res.send(error.message);
  }
});


module.exports = router;
