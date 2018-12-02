/*
Program: userController.js
Author: Collins Metto
*/
// validate and sanitize form input

var User = require('../models/user');
var Attribute = require('../models/attribute');
var knnAlg = require('../knnAlg');
var dataParser = require('../dataParser');

//-----------------------------------------------------------------------------------------------------------

// var Partner = require('../models/partner');

// var async = require('async');


// exports.index = function(req, res) {   
//     //res.send("NOT implemented: Site home page");
//     // res.render('index');}

// async.parallel({
//         user_count: function(callback) {
//             User.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
            
//         },

//         attribute_count: function(callback) {
//             Attribute.countDocuments({}, callback);
//         },
//         partner_count: function(callback) {
//             Partner.countDocuments({}, callback);
//         },
        
        
//     }, function(err, results) {
//         res.render('index', { title: 'Dynamic Duos Home', error: err, data: results });
//     });
//  };
 //-----------------------------------------------------------------------------------------------------------
// Display user login form on POSST
exports.user_login = function(req, res, next){
        res.redirect('attribute_create_get');

}


 // Display User registration form on GET
exports.user_registration_get = function(req, res, next) {       
    res.render('user_registration', { title: 'User Registration'});
};

// save user to database
exports.user_registration_post = function(req, res, next) {
// validate form input, check that passwords match
// check that no other user has same name

    var user = new User ({
      firstName :req.body.firstName,
      familyName :req.body.familyName,
      email : req.body.email, 
      password: req.body.password,
      passwordConf: req.body.passwordConf,
      course: req.body.class,
      
    });
    console.log(user);


    user.save(function (err) {
       // console.log("User has been saved");
     if(err) {return next(err);}
    // res.render('welcome_page');
    });
    console.log("Before");
    res.render('welcome_page', {user: user.firstName});
  // console.log("After");
}
// Display attribute create form on GET.
exports.user_attribute_get = function(req, res, next) { 
    res.render('attribute_create_get', {title: 'Please rate your preferences'});  
};
//-----------------------------------------------------------------------------------------------------------
exports.user_attribute_post = function(req, res, next) {

//-----------------------------------------------------------------------------------------------------------
// ------------------------------------
     // 1. Access user in this session.
     // 2. Check if user has attribute.
     // 3. Update /save attributes. 
    //  user_in_this_session.attribute = attribute;
    //  user_in_this_session.save;

// ------------------------------------


// --------------------------------------------------------------------------------------
    // Run algorithm. 

var allUsers= function(firstName, callback) {
    User.find({}).
          exec(function(err, allUsers) {
             // docs contains an array of MongooseJS Documents
             // so you can return that...
             // reverse does an in-place modification, so there's no reason
             // to assign to something else ...
             callback(err, allUsers);
          });
};

allUsers('Collins', function(err, allUsers) {
    if (err) { 
       /* there was an error fetching the list of users */
       return;
    }

// -----------------------------------------------------------------
// logged in user 
var user = { 
            firstName: 'Ropi',
            attribute: { language: 5, background: 4, confidence: 1 }}

// ------------------------------------------------------------------            
// all potential partners
var k = 10; // k nearest neighbours to return 
var neighbours = knnAlg.getNeighbours(allUsers, user, k); // get k nearest neighbours
var allNeighboursDetails = knnAlg.populateNeighbours(allUsers, neighbours); // get all other neighbour info. 




// ------------------------------------
    res.render('k_neighbours', { title: 'Partner List', data: allNeighboursDetails });
 });
// --------------------------------------------------------------------------------------


// User.find({}).exec(function (err, users) {
//     var n = users.length;
//     //USERS = users;
//     for (var i = 0; i < n; i++) {
//         var user = users[i];
       

//     }
// })
// --------------------------------------------------------------------------------------

    // // find all partners 
    // Partner.find({}) // can specify here what to find
    // .exec(function (err, list_partners) {
    //   if (err) { return next(err); }
    //   //Successful, so save as list_partners
    //   // Run algorithm to match people
    // });
    //  var list_partners = ['Partner1', 'Partner2', 'Partner3'];
    //  res.render('partner_list', { title: 'Partner List', partner_list: list_partners });
    

    // match attributes with list of people

// ------------------------------------------------------------------------------------

    // test out algorithm from another js file 

// console.log( knnAlg.print());
// console.log(knnAlg.table())





//res.redirect('attribute_create_get'); // for testing console output 
}
