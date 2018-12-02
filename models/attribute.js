/*
Program: attribute.js
Author: Collins Metto
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AttributeSchema = new Schema(
			      {
				  language: {type: Number, required: true},
                  background: {type: Number, required: true},
                  confidence: {type: Number},
			      }
			      );

// Virtual for an attribute (?)


//Export model
module.exports = mongoose.model('Attribute', AttributeSchema);
