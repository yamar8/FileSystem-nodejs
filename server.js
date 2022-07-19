const express = require("express");
const app = express();

const multer = require('multer');

const upload = multer({dest: './upload'});

const PORT = 3000;
app.use(express.json());

app.use('/',require('./fileRouter.js'))

app.listen(3000,()=>console.log(`Server Up: ${PORT}`))
