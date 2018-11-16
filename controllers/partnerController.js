var Partner = require('../models/partner');



// Display list of all partners.
exports.partner_list = function(req, res) {
   // res.send('NOT IMPLEMENTED: Partner list');

    // find all partners 
    Partner.find({}) // can specify here what to find
    .exec(function (err, list_partners) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('partner_list', { title: 'Partner List', partner_list: list_partners });
    });
    
};









