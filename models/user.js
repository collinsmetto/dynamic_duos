/*
Program: user.js
Author: Collins Metto
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
			      {
				  firstName: {type: String, required: true, max: 100},
                  familyName: {type: String, required: true, max: 100},
                  course: {type: String},
                  email: {type: String},
                  attribute : {type:Schema.Types.ObjectId, ref: 'Attribute'},
                  partner: [{type: Schema.Types.ObjectId, ref: 'Partner'}],
			      }
			      );

// Virtual for user's full name

//Export model
module.exports = mongoose.model('User', UserSchema);