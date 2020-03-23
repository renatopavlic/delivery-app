const express = require("express");
const router = express.Router();

router.use("/restaurant", require("./restaurant"));
router.use("/user", require("./user"));

module.exports = router;
