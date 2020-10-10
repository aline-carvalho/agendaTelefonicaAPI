const express = require('express');
const blog = require('./projeto-tarefa/src/routes/blog-routes');
const app = express();

app.use(express.json());

app.use('/', blog);

module.exports = app;