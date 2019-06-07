const express = require('express');
const knex = require('knex');
const helmet = require('helmet');


const server = express();
server.use(helmet());
server.use(express.json());
const port = process.env.PORT || 5500;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));