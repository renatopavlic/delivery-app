require('dotenv').config({
  path: (process.argv[2]!=null)?process.argv[2]:(__dirname + '/beta.env')
});

const express = require("express");
const app = express();
const path = require('path');

//how to use .env vars
console.log(process.env.TEST_VAR, process.env.MONGODB_URI);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + "/../frontend/build"));
app.use("/api/", require("./api"));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../frontend/build/index.html'));
});

const server = app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
