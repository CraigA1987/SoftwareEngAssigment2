var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log(res.locals);
  res.render("dashboard", { data: req.body });
});

module.exports = router;
