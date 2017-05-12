var db = require('./db');
var stocksManager = require('../managers/stocksmanager'); 
var fs = require('fs');

module.exports = {
	start: function(callback) {
		fs.readFile('data/stocks.txt', 'utf8', function(err, data) {
			if (err) {
				console.log(err);
				callback();
				return;
			}
		  
			this.saveData(data.split('|'), 0, function() {
				//db.done(); //TODO: create new connection on every manager request
				callback();
			});
		}.bind(this));
	},
	saveData: function(data, index, callback) {
		var stockParts = data[index].split(' ');
		stocksManager.update(stockParts[0], Number(stockParts[1]), function() {
			if (data[index + 1]) {
				this.saveData(data, index + 1, callback);
			} else {
				callback();
			}
		}.bind(this));
	}
};