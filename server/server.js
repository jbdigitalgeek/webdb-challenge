const express = require('express');
const helmet = require('helmet');

const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const projectRouter = require('./projects-router');
const actionsRouter = require('./actions-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'You are in the root directory, navigate to /actions or /router'});
});

server.use('/projects', projectRouter);
server.use('/actions', actionsRouter);



module.exports = server;