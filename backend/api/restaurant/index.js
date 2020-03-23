const express = require("express");
const router = express.Router();
const db = require('../../db');
const Restaurant = db.Restaurant;

router.get("/", function(req, res){

  Changes.find({})
  .then(restaurants=>{
    res.json(restaurants);
  })
  .catch(e=>{
    res.json({error: e})
  })
})

router.post("/add", function(req, res){
  const restaurant = new Restaurant(req.body);

  restaurant.save((e)=>{
    if(e){
      res.json({error: e})
    } else res.json({ok: true});
  })
})
//For creating new accounts, user inputs basic information in order to register
module.exports = router;
