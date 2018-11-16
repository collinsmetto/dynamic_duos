/*
Program: partner.js
Author: Collins Metto
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PartnerSchema = new Schema(
			      {
				  first_name: {type: String, required: true, max: 100},
                  family_name: {type: String, required: true, max: 100},
                  course: {type: String, required :true, max:100},
                  match: {type: Number},
                  
			      }
			      );

// Virtual for partner's full name (?)

//Export model
module.exports = mongoose.model('Partner', PartnerSchema);