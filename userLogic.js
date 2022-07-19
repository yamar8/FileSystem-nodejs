const fs = require('fs');


const readUser = ()=>{
    const text = fs.readFileSync("data/user.json", { encoding: "utf-8" })
    return text;
}

module.exports = {readUser}
