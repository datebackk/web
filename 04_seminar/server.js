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
    let scoring = 0;
    const data = request.body;

    switch (data.sex) {
        case 'female':
            scoring += 0.4;
    }

    const age = (Date.now() - new Date(data.birthday)).year;
    if (age > 20) scoring += Math.max(0.3, (age - 20) * 0.01);

    scoring += Math.max(0.42, data.periodLife * 0.042);

    switch (data.profession) {
        case 'low-risk':
            scoring += 0.55;
            break;
        case 'other':
            scoring += 0.16;
            break;
    }

    switch (data.sphere) {
        case 'public':
            scoring += 0.21;
            break;
    }

    scoring += Math.min(0.59, data.periodWork * 0.059);

    if (data.bankAccount) scoring += 0.45;
    if (data.realty) scoring += 0.35;
    if (data.insurance) scoring += 0.19;




    response.send(`${scoring}`)
});

app.listen(8080);
console.log('Started...')
