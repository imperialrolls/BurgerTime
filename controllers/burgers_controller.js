// Import (require)
var express = require("express")
var burger = require("../models/burger.js")
var router = express.Router()

router.get("/", (req, res) => {
  burger.selectAll().then(data => {
    const allBurgers = {
      burgers: data
    }
    res.render("index" , allBurgers)
  })
})

router.post("/api/burgers", (req, res) => {
  burger.newBurger(req.body.burger_name).then(result => {
    console.log("delicious burger added", result)
    res.json(result)
  })
})

router.put("/api/burger/:id", (req, res) => {
  console.log(req.params.id)
  burger.devour(req.params.id).then(result => {
    console.log("delicious burger devoured")
    res.end()
  })
})



module.exports = router
