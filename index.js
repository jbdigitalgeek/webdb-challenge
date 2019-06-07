const express = require('express')


const server = express();
const port = process.env.PORT || 5500;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));