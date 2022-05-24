const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TravelGeeks", {
   
}).then(() =>{
    console.log(`Connected`);
}).catch((e) => {
    console.log(`failed`);
})