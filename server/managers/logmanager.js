var fs = require('fs');
var db = require('../db/db');

module.exports = {
	init: function() {
		db.createLogTables(function(wasCreated) {
    		if (!wasCreated) {
    			return;
    		}

    		fs.readFile('./server/data/data.csv', 'utf8', function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
			  
				this.saveLog(data.split('\n'), 1);
			}.bind(this));
	    }.bind(this));
	},
	createLog: function(callback) {
		//
	},
	saveLog: function(data, index, callback) {
		db.insertLog(data[index], function() {
			if (data[index + 1]) {
				this.saveLog(data, index + 1, callback);
			} else {
				if (callback) {
					callback();
				}
			}
		}.bind(this));
	},
	readLogs: function(query, callback) {
	 	db.getLogsFor(query, callback);
	},
	updateLog: function(callback) {
		
	}
}