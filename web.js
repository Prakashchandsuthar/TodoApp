/**
 * Created by prakashchandras on 1/28/2015.
 */

var db = require('./config/db')();

var app = require('./config/express')();

require('./config/route')(app);

app.listen('3000');

console.log("listening on port 3000");