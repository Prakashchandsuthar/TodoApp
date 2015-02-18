/**
 * Created by prakashchandras on 1/30/2015.
 */

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){

    var db = mongoose.connect(config.db , function(err){
        if(err){
            console.error('could not connect to MongoDB');
            console.log(err);
        }
    });

    require('../models/todo.model.js');
    return db;
}