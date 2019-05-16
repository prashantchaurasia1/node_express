const express = require('express');
const app = express();

const route = require('./readurl.js');

// using route created
app.use('/', route);

app.listen('3000');