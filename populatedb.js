#! /usr/bin/env node

console.log('This script populates a user to the database.');
 
// Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

//-------------------------------------------------------------------------------------
var async = require('async');
var User = require('./models/user');
var Attribute = require('./models/attribute');
var Partner = require('./models/partner');


var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true); // set mongoose to avoid collection.ensureIndex Deprecation warning 

var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser : true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []
var attributes = []
var partners = []

//-------------------------------------------------------------------------------------
function userCreate(first_name, family_name, cb) {
  userdetail = {first_name:first_name , family_name: family_name }
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}
function createUsers(cb) {
    async.parallel([
        function(callback) {
          userCreate('Collins', 'Metto', callback);
        },
              
        ],
        // optional callback
        cb);
}

//-------------------------------------------------------------------------------------
function attributeCreate(language, background, confidence, cb)
{
attributedetail = {language: language, background:background, confidence:confidence}
var attribute = new Attribute(attributedetail);

// save attribute to array attribute. print attribute to console
attribute.save(function(err){
if(err){
  cb(err, null)
  return
}
console.log('New Attribute' + attribute);
attributes.push(attribute);
cb(null, attribute)
});
}

function createAttributes(cb) {
  async.parallel([
    function(callback) {
      attributeCreate(1,2,3, callback);
    },
  ],
  // optional callback
  cb);
  }
  
//-------------------------------------------------------------------------------------
function partnerCreate (first_name, family_name, course, match, cb)
{
  partnerdetail = {first_name:first_name, family_name:family_name, course:course, match:match}
  var partner = new Partner(partnerdetail);
  // save partner to array partner. print partner to console
  partner.save(function(err){
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Partner' + partner);
    partners.push(partner);
    cb(null, partner)
});
}
function createPartners(cb) {
async.parallel([
  function(callback){
  partnerCreate('foo', 'bar', 'COSIW04', 0.9, callback);
  },
],
// optional callback
cb)
}
//-------------------------------------------------------------------------------------
async.series([
    createUsers,
    createAttributes,
    createPartners,
    
],
// Optional callback
function(err, results) {
    // All done, disconnect from database
    mongoose.connection.close();
});



