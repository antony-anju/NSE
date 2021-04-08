const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routers/info');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/ecosystemdb?retryWrites=true', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    console.log('Connected to db ecosystem');
}).catch(() => {
    console.log('Connection to db ecosystem failed');
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(route);

module.exports = app;