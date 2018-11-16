/*
Program: userController.js
Author: Collins Metto
*/
// validate and sanitize form input
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


var User = require('../models/user');
var Attribute = require('../models/attribute');
var Partner = require('../models/partner');

var async = require('async');


exports.index = function(req, res) {   
    //res.send("NOT implemented: Site home page");
    // res.render('index');}

async.parallel({
        user_count: function(callback) {
            User.countDocuments({first_name: 'Collins'}, callback); // Pass an empty object as match condition to find all documents of this collection
            
        },

        attribute_count: function(callback) {
            Attribute.countDocuments({}, callback);
        },
        partner_count: function(callback) {
            Partner.countDocuments({}, callback);
        },
        
        
    }, function(err, results) {
        res.render('index', { title: 'Dynamic Duos Home', error: err, data: results });
    });
 };
 
// Display User create form on GET
exports.user_registration_get = function(req, res, next) {       
    res.render('user_registration', { title: 'Create User'});
};
exports.user_registration_post = function(req, res, next) {

    var user = new User ({
      firstName :req.body.firstName,
      familyName :req.body.familyName,
      course: req.body.class,
      email :req.body.email,

    });
    user.save(function (err) {
     if(err) {return next(err);}
    });
  res.redirect('attribute_create_get');
}

