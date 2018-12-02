
/*
Program: duos.js
Author: Collins Metto
*/

var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');
// var partner_controller = require('../controllers/partnerController');
// var attribute_controller = require('../controllers/attributeController');

// START ROUTE 
router.get('/', function (req,res)
{
    res.render('index', { title: 'Dynamic Duos'});

})
router.post('/', function(req,res)
{
res.render('welcome_page')
})
// USER ROUTES 
//router.get('/', user_controller.index);

router.get('/user_registration', user_controller.user_registration_get);
router.post('/user_registration', user_controller.user_registration_post);

// ATTRIBUTE ROUTES 
//- router.get('/attribute_create_get', attribute_controller.attribute_create_get); // get create form
//-router.post('/attribute_create_get', attribute_controller.attribute_create_post);
router.get('/attribute_create_get', user_controller.user_attribute_get); // get create form
router.post('/attribute_create_get', user_controller.user_attribute_post); // attach attributes to user

/// PARTNER ROUTES ///

router.get('/partner_list', user_controller.user_attribute_post);


// Welcome page route 
router.get('/welcome_page', function (req, res) {
    res.render('welcome_page')
  });


module.exports = router;