const express = require('express');
const morgan = require('morgan');
const { httpNotFound, httpSuccess } = require('./Utils/htttp-response');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use((req, res) => httpNotFound(res, { error_messages: 'router not found' }));

app.get('/', (req, res) => httpSuccess(res, { message: 'OK' }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
