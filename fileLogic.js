const fs = require('fs');
const { nextTick } = require('process');

function saveFile(file){
    fs.writeFileSync('./uploads/' + file.originalname ,file.buffer);
}

const createFile = (fileName)=>{
    fs.writeFileSync(`data/${fileName}.txt`,"");
}

const readFile = async (fileName) =>{
    if(!fs.existsSync(`data/${fileName}.txt`)){
        throw {message: "File dosn't exist"};
    }
        const text = await fs.readFileSync(`data/${fileName}.txt`, { encoding: "utf-8" });
        return text;   
}
const updateFile = (fileName,value)=>{
    fs.appendFileSync(`data/${fileName}.txt`, value)
}

const deleteFile = (fileName)=>{
    if(!fs.existsSync(`data/${fileName}.txt`)){
        throw {message: "File dosn't exist"};
    }
    fs.unlinkSync(`data/${fileName}.txt`)
}

function isExist(fileName){
    return fs.existsSync('./data/' + fileName);
}

function isValidName(fileName = ""){
    return ["/","\\","+",":","|","?","<",">",'"'].find(char => fileName.includes(char)) ? false : true;
}

function isValidExtantions(fileName =""){
    let ext = fileName.slice(fileName.lastIndexOf("."));
    return ["pdf","txt","png","jpg","js","html","css","jsx","ts"].find(char=> ext == char) ? false :  true;
}
function isValid(req,res,next){
    const {filename} = req.body;
    if(isValidName(filename) && isValidExtantions(filename)) next();
}
// deleteFile("hello");

module.exports = {readFile,createFile,deleteFile,updateFile,saveFile};