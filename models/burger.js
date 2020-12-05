// Import ORM to create functions that will interact with burgers_db
const orm = require("../config/orm");
// get, create, and update burgers
const burger = {
    all: function(cb){
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals,function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
// Export database functions for the burger controller
module.exports = burger;