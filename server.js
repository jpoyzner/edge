const express = require('express');
const app = express();
const logManager = require('./managers/logmanager');

const PORT = 8081;

app.listen(PORT, function serverStarted() {
    require('./server/db').init(function(wasCreated) {
    	logManager.create(wasCreated, function() {
    		require('./server/controller')(app);
    		console.log("Server listening on: http://localhost:" + PORT);
    	});
    }); 
});

app.use(express.static(__dirname));