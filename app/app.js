import express from 'express';
import Txt from '../models/txt';
import api from './routes';

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use('/api', api);

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Listening at http://%s:%s', host, port)

})