const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.sendFile('index.html', {root: __dirname});
});

app.listen(8080);