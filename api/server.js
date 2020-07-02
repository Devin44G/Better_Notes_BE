const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
      server.use(express.json());
      server.use(helmet());
      server.use(morgan('tiny'));
      server.use(cors());

server.get('/', (req, res) => {
  res.send(`
      <h2>Welcome to the server!</h2>
    `);
});

module.exports = server;
