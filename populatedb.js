/*
Program: populatedb.js
Author: Collins Metto
Description: populates database specified as command-line aargument.
*/

console.log('This script populates users with attributes to the database.');
 
// Specified database as argument - e.g.: populatedb mongodb://CollinsMetto:aeUpbd9Z5eT3xii@your_dabase_url');
// mongodb://CollinsMetto:aeUpbd9Z5eT3xii@ds249583.mlab.com:49583/dynamic_duos
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

//-------------------------------------------------------------------------------------
var chance = require('chance').Chance(); // to generate random entries 
var async = require('async');
var User = require('./models/user');
var Attribute = require('./models/attribute')


var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); // set mongoose to avoid collection.ensureIndex Deprecation warning 

var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser : true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []


//-------------------------------------------------------------------------------------
function userCreate(firstName, attribute) {
  userdetail = {firstName:firstName, attribute: attribute}
  var user = new User(userdetail);
       
  user.save(function (err) {
   if (err) console.log(err);
    users.push(user)
  }  );
}

//-----------------------------------------------------

function createUsers() {
          for (var i = 0; i < 1; i++)
          {
              attributedetail = {
                  language:chance.integer({ min: 0, max: 5 }),
                  background:chance.integer({ min: 0, max: 5 }),
                  confidence:chance.integer({ min: 0, max: 5 })
                  };
              var attribute = new Attribute(attributedetail);

              userCreate(chance.first(), attribute);
          }
  }
         
  


//-------------------------------------------------------------------------------------
async.series([
    createUsers    
],
// Optional callback
function(err, results) {
    // All done, disconnect from database
    mongoose.connection.close();
});




