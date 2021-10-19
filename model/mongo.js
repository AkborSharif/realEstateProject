const mongoose = require('mongoose');
const mongoConfig = require('../config/mongoConfig.json');

mongoose.connect(mongoConfig.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () =>
	console.log('connection successful to ' + mongoConfig.url)
);
db.on('error', (error) => console.log(error));
db.on('close', () => console.log('closing connection ' + mongoConfig.url));
//db.close();
module.exports = mongoose;
