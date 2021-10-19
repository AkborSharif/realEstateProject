var express = require('express');
var router = express.Router();
const User = require('../model/user');
/* GET users listing. */
// router.get('/', function (req, res, next) {
// 	res.send('respond with a resource');
// });

router.get('/', async function (req, res, next) {
	let users = await User.find({});
	console.log(users);
	res.json(users);
});

router.post('/', async function (req, res, next) {
	let body = {
		name: req.body.name,
		isAdmin: req.body.isAdmin,
	};
	console.log(body);

	let userDao = new User(body);
	//courseDao.save();

	await userDao.save((err, user) => {
		if (!err) {
			console.log('user saved in db');
			console.log(user);
			res.status(200).json(user);
			//res.send('home', { title: 'Express' });
		} else {
			console.log('Error in userSchema');
			res.send('Error ' + err);
		}
	});
});
module.exports = router;
