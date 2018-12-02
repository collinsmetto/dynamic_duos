/*
Program: user.js
Author: Collins Metto
*/
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AttributeSchema = new Schema(
    {
        language: {type: Number, required: true},
        background: {type: Number, required: true},
        confidence: {type: Number, required: true},
    }
    );

var UserSchema = new Schema(
			      {
      				 firstName: {type: String, required: true, max: 100, unique: true},
                //   familyName: {type: String, required: true, max: 100},
                //   password :{type:String, required : true},
                //   passwordConf: {type:String, required:true},
                //   course: {type: String},
                //   email: {type: String},
                  attribute : AttributeSchema,
                  partner: {type: Schema.Types.ObjectId, ref: 'Partner'},
			      }
			      );

// Virtual for user's full name
// hashing a password before saving it to the database
// UserSchema.pre('save', function (next) {
// 	var user = this;
// 	bcrypt.hash(user.password, 10, function (err, hash){
// 	  if (err) {
// 		return next(err);
// 	  }
// 	  user.password = hash;
// 	  next();
// 	})
// 	});
	
//Export model
module.exports = mongoose.model('User', UserSchema);