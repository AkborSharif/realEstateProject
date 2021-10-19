const mongoose = require('./mongo');
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 200,
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

module.exports = mongoose.model('user', userSchema);
