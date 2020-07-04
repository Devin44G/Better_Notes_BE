const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const auth_router = require('../auth/auth_router');

const server = express();
      server.use(express.json());
      server.use(helmet());
      server.use(morgan('tiny'));
      server.use(cors());
      server.use('/auth', auth_router);

server.get('/', (req, res) => {
  res.status(200);
  res.send(`
      <h2>Welcome to the server!</h2>
    `);
});

module.exports = server;
