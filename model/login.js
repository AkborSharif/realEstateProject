const mongoose = require('./mongo');
const loginSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 200,
	},
	password: {
		type: password,
		required: true,
        minlength:7,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('login', loginSchema);