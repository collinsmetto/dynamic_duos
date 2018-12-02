/*
Program: attributeController.js
Author: Collins Metto
*/


var Attribute = require('../models/attribute');
// var Partner = require('../models/partner');

// Display attributes page 
exports.attribute_page = function(req, res) {
//res.send('NOT IMPLEMENTED: Attributes input page');

   // find all partners 
   Attribute.find() // can specify here what to find
   .exec(function (err, list_attributes) {
     if (err) { return next(err); }
     //Successful, so render
     res.render('attribute_list', { title: 'Attribute List', attribute_list: list_attributes});
   });

}

//------------------------------------------------------------------------------------------
// Display attribute create form on GET.
exports.attribute_create_get = function(req, res, next) { 
      res.render('attribute_create_get', { title: 'Create Attribute'});  
};
//------------------------------------------------------------------------------------------


// // Handle attribute create on POST.
 exports.attribute_create_post = function (req, res, next)
// validate and sanitize
// Create an attribute object 
// Process request after validation and sanitization.
{
        
  // Extract the validation errors from a request.

  // Create a Book object with escaped and trimmed data.
  var attribute = new Attribute(
    { 
      language: req.body.language,
      background: req.body.background,
      confidence: req.body.confidence,
     });


   // save attribute
   // Data from form is valid. Save attribute to logged in user in this session. 
   attribute.save(function (err) {
    if (err) { return next(err); }
       //successful - redirect to new book record.
        // res.render('partner_list', { title: 'Partner List', partner_list: list_partners });
    });
// render attributes 

// Assign logged in user to attributes 




    //--------------------------------------------------------------------------------------
    // find all partners 
    Partner.find({}) // can specify here what to find
    .exec(function (err, list_partners) {
      if (err) { return next(err); }
      //Successful, so save as list_partners
      // Run algorithm to match people

      res.render('partner_list', { title: 'Partner List', partner_list: list_partners });
    });

    // match attributes with list of people
    

  }

//------------------------------------------------------------------------------------------
