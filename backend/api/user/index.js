const express = require("express");
const router = express.Router();
const db = require('../../db');
const User = db.User;

router.get("/", function(req, res){

  Changes.findOne({})
  .then(user=>{
    res.json(user);
  })
  .catch(e=>{
    res.json({error: e})
  })
})

router.post("/add", function(req, res){
  const user = new User(req.body);

  user.save((e)=>{
    if(e){
      res.json({error: e})
    } else res.json({ok: true});
  })
})
//For creating new accounts, user inputs basic information in order to register
module.exports = router;
