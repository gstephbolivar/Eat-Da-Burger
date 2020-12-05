// require express
const express = require("express");
// require burger orm
const burger = require("../models/burger");
// using routes from express
const router = express.Router();

// route for initial homepage
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
//   route for new burger
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
//   route for eating burger
  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
// export routes
module.exports = router;