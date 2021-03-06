//TODO: Add config.js.sample file and use it to set up server

const express = require('express');
const app = express();

const PORT = 8081;

app.listen(PORT, function() {
    require('./server/db/db').init(function() {
    	require('./server/managers/logmanager').init();
    });

    require('./server/controller')(app, function() {
    	console.log("Server listening on: http://localhost:" + PORT);
    });
});

app.use(express.static(__dirname));