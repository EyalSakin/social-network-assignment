const bodyParser = require('body-parser')
const express = require('express');
const data = require('./posts.json');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/posts', (req, res) => {
    const sortedData = data.sort((a, b) => {
        const dateA = new Date(a.created_at.replace(/\s/g, ''));
        const dateB = new Date(b.created_at.replace(/\s/g, ''));
        return dateB - dateA;
    });

    res.json(sortedData);
});

app.listen(3000);