/*
Program: user.js
Author: Collins Metto
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
			      {
				  first_name: {type: String, required: true, max: 100},
                  family_name: {type: String, required: true, max: 100},
                  class: {type: String},
                  attribute : {type:Schema.Types.ObjectId, ref: 'Attribute'}
                  partner: [{type: Schema.Types.ObjectId, ref: 'Partner'}]
			      }
			      );

// Virtual for user's full name

//Export model
module.exports = mongoose.model('User', UserSchema);