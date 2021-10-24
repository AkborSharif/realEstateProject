const mongoose = require('./mongo');
const Joi = require('joi');

const User = mongoose.model(
	'User',
	new mongoose.Schema({
		firstName: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 200,
		},
		lastName: {
			type: String,
			required: true,
			minlength: 2,
			maxlength: 200,
		},
		email: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 200,
			unique: true,
		},
		password: {
			type: String,
			minlength: 5,
			maxlength: 500,
		},
		rePassword: {
			type: String,
			minlength: 5,
			maxlength: 500,
		},
		date: {
			type: Date,
			default: Date.now,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	})
);
function validateUser(user) {
	const schema = Joi.object({
		firstName: Joi.string().min(2).max(200).required(),
		lastName: Joi.string().min(2).max(200).required(),
		email: Joi.string().min(5).max(200).required().email(),
		password: Joi.string().min(5).max(500).required(),
		rePassword: Joi.ref('password'),
	});

	return schema.validate(user);
}
exports.User = User;
exports.validate = validateUser;
