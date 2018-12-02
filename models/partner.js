/*
Program: partner.js
Author: Collins Metto
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var NewUserSchema = new Schema(
	{
		firstName: {type: String, required: true, max: 100},
		familyName: {type: String, required: true, max: 100},
		course: {type: String, required :true, max:100},
		email: {type: String},
		  }
		  );	

var PartnerSchema = new Schema(
			      {
				  
                  course: {type: String, required :true, max:100},
				  match: {type: Number},
				  rank : {type: Number},
				  user: [{type: NewUserSchema}],   
			      }
			      );

//Export model
module.exports = mongoose.model('Partner', PartnerSchema);