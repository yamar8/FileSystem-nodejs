const fs = require("fs");
const { nextTick } = require("process");

function saveFile(file) {
  fs.writeFileSync("./uploads/" + file.originalname, file.buffer);
}

const createFile = (fileName, value) => {
  if (isExist(fileName)) throw { message: "file is already exist" };
  fs.writeFileSync(`uploads/${fileName}`, value);
  console.log("-----------")
};

const readFile = async (fileName) => {
  if (!isExist(fileName)) throw { message: "File dosen't exist" };
  const data = await fs.readFileSync(`uploads/${fileName}`, {
    encoding: "utf-8",
  });
  return data;
};
const updateFile = (fileName, value) => {
  if (!isExist(fileName)) throw { message: "file dosen't exist" };
  fs.appendFileSync(`uploads/${fileName}`, value);
};

const deleteFile = (fileName) => {
  if (!isExist) throw { message: "File dosen't exist" };
  fs.unlinkSync(`uploads/${fileName}`);
};

function isExist(fileName) {
  return fs.existsSync(`./uploads/${fileName}`);
}

function isValidName(fileName = "") {
  return ["/", "\\", "+", ":", "|", "?", "<", ">", '"'].find((char) =>
    fileName.includes(char)
  )
    ? false
    : true;
}

function isValidExtantions(fileName = "") {
  let ext = fileName.slice(fileName.lastIndexOf("."));
  return [".pdf", ".txt", ".png", ".jpg", ".js", ".html", ".css", ".jsx", ".ts"].find(
    (char) => ext == char
  )
    ? true
    : false;
}

const isValid = (req, res, next) => {
    const { fileName } = req.body;
    if (isValidName(fileName) && isValidExtantions(fileName)) {
    next();
  }else{
      res.send("file is not valid");
  }
}

// deleteFile("hello");

module.exports = { readFile, createFile, deleteFile, updateFile, saveFile,isValid };
