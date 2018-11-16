
/*
Program: duos.js
Author: Collins Metto
*/

var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');
var partner_controller = require('../controllers/partnerController');
var attribute_controller = require('../controllers/attributeController');

// USER ROUTES 
router.get('/', user_controller.index);
router.get('/user_registration', user_controller.user_registration_get);
router.post('/user_registration', user_controller.user_registration_post);

// ATTRIBUTE ROUTES 
//router.get('/attribute_page', attribute_controller.attribute_page);
router.get('/attribute_create_get', attribute_controller.attribute_create_get); // get create form
router.post('/attribute_create_get', attribute_controller.attribute_create_post);

/// PARTNER ROUTES ///

router.get('/partner_list', partner_controller.partner_list);




module.exports = router;