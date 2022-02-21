const {readFileSync, copyFileSync}=require("fs");
var load=()=>JSON.parse(readFileSync('data.json'));
module.exports={load};

// var newdata={
//     "rollnumber": 1,
//     "name": "John",
//     "course": "MSC",
//     "age":25
// };

// var file=require("fs");
// load.push(newdata);
// var newData = JSON.stringify(load);
// fs.writeFile('data.json', newData, err => {
//     // error checking
//     if(err) throw err;
//     console.log(newdata);
//     console.log("New data added");
// }); 

function filewriter(newdata) {
    const fs = require('fs')
    const jsonFile = require("./data.json")

    // var newdata = {
    //     "name": "meenu", "age": 23, "course": "bca", "rollnumber": 1025
    // }
    jsonFile.push(newdata);

    fs.writeFile('data.json',JSON.stringify(jsonFile),err => {
        if (err) throw err;
        console.log("Written");
    });
}

module.exports = { load };
module.exports.filewriter = filewriter;