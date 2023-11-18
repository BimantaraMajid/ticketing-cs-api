const express = require('express');
const morgan = require('morgan');
const { httpNotFound, httpSuccess } = require('./Utils/http-response');
const indexRouter = require('./routes');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => httpSuccess(res, { message: 'OK' }));

app.use('/', indexRouter);

app.use((req, res) => httpNotFound(res, { error_messages: 'router not found' }));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;
