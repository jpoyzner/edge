var fs = require('fs');
var db = require('../server/db');

module.exports = {
	create: function(tableCreated, callback) {
		if (!tableCreated) {
			callback();
			return;
		}

		fs.readFile('data.csv', 'utf8', function(err, data) {
			if (err) {
				console.log(err);
				callback();
				return;
			}
		  
			this.saveLog(data.split('\n'), 1, function() {
				//db.done(); //TODO: create new connection on every manager request
				callback();
			});
		}.bind(this));

		
	},
	saveLog: function(data, index, callback) {
		db.insertLog(data[index], function() {
			if (data[index + 1]) {
				this.saveLog(data, index + 1, callback);
			} else {
				callback();
			}
		}.bind(this));
	},
	read: function(query, callback) {
	 	db.getLogsFor(query, callback);
	},
	// update: function(name, price, callback) {
	// 	db.updateStock(name, price, callback);
	// }
}