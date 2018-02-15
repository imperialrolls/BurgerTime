
var orm = require("../config/orm.js")

var burger = {
  // selectAll()
  selectAll: function () {
    return orm.selectAll("burgers")
  },
  //insertOne()
  newBurger: function (newBurg) {
    return orm.insertOne("burgers", "burger_name", newBurg)
  },
  //updateOne()
  devour: function(id) {
    return orm.updateOne("burgers", "devoured", true, id)
  }
}

//Export the ORM object
module.exports = burger
