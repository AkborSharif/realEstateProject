var express = require('express');
var router = express.Router();
var { User, validate } = require('../model/user');
var _ = require('lodash');
const bcrypt = require('bcrypt');
/* GET home page. */
router.get('/', async function (req, res, next) {
	var users = await User.find({});
	console.log(users);
	res.send(users);
});

router.post('/', async function (req, res, next) {
	console.log('top', req.body);
	const { error } = validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	let user = await User.findOne({ email: req.body.email });
	if (user) {
		return res.status(400).send('User already registered');
	}
	user = req.body;
	user = new User(_.pick(user, ['firstName', 'lastName', 'email', 'password']));

	const salt = await bcrypt.genSalt(10);

	user.password = await bcrypt.hash(user.password, salt);
	console.log('here');
	console.log(user);
	await user.save();
	res.send(_.pick(user, ['_id', 'firstName', 'password']));
});


module.exports = router;
