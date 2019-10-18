var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    cat.create(["name"], [req.body.name], function (result) {
        res.json({ id: result.insertId });
    });
});

module.exports = router;
