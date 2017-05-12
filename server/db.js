var mysql = require('mysql');
var config = require('../config/db.config');

var db = {
	init: function(callback) {
		if (this.connection) {
			this.connection.destroy();
		}
		
		this.connection =
			mysql.createConnection({host: 'localhost',  user: config.user, password : config.password, database : 'base'});

		this.run("SELECT 1 FROM data LIMIT 1", function(err, rows, fields) {
			if (!err) {
				callback(false);
				return;
			}
			
			var createTable = "CREATE TABLE data (id INT AUTO_INCREMENT, logLine TEXT DEFAULT NULL, PRIMARY KEY (id))";
			this.run(createTable, function() {
				callback(true);
			}.bind(this));
		}.bind(this));
	},
	insertLog: function(logLine, callback) {
		if (!logLine) {
			callback();
			return;
		}

		this.run("INSERT INTO data (logLine) VALUES ('" + logLine + "')", callback);
	},
	getLogsFor: function(query, callback) {
		this.run("SELECT logLine FROM data WHERE logLine LIKE '%" + query + "%' LIMIT 25", function(err, rows, fields) {
			if (err) {
				console.log(err);
				callback([]);
				return;
			}

			callback(rows);
		}.bind(this));
	},
	run: function(query, callback, quietly) {
		if (!quietly) {
			console.log(query);
		}
		
		this.connection.query(query, callback);
	},
	done: function() {
		this.connection.end();
	}
}

module.exports = db;