var path = require('path');
var logManager = require('./managers/logmanager');

module.exports = function(app, callback) {
	// app.get('/logs/*', function(req, res) {
	// 	var query = req.url.split('/')[2];

	// 	logManager.read(query, function(logLines) {
	// 		res.end(JSON.stringify(logLines));
	// 	});
	// });

	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, '../index.html'))
	});

	callback();
}