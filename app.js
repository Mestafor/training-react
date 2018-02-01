const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'app')));

app.get('/', (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

module.exports = app;