const mongoose = require('./mongo');
const signUpSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 200,
	},
    lastName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 200,
	},
    email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 200,
	},
    password: {
		type: String,
		required: true,
		minlength: 5,
        maxlength: 50,
	},
    rePassword: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('signUp', signUpSchema);