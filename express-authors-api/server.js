const express = require('express');
const app = express();
const port = 8081;

// implement API routes
const authorsAPI = require('./server/authors-api');
var responseTime = require('response-time')

app.use(responseTime())

app.use('/authors', authorsAPI);

app.get('/', (req, res) => res.status(200).json('Welcome on express-authors API !'))

app.all('*', (req, res) => res.status(404).json('Route not found'));

app.listen(port, () => console.log(`Express Test app listening on port ${port}!`));

module.exports = app;
