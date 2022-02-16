const {readFileSync}=require("fs");
var load=()=>JSON.parse(readFileSync('data.json'));
module.exports={load};