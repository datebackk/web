const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.get('/', function(request, response) {
    response.sendFile('index.html', {root: __dirname});
});

app.post('/scoring', function(request, response) {
    console.log(request.body);
});

app.listen(8080);
console.log('Started...')
