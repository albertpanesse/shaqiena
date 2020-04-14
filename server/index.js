const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8888;
const path = require('path');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../react-client/dist/')));
// app.use(express.static(path.join(__dirname, 'public/')));

const apiRouter = require('./routes/apis');
app.use('/api', apiRouter);

app.get('/images/:dirname/:filename', function (req, res) {
 	const dirname = req.params.dirname;
 	const filename = req.params.filename;

  res.sendFile(filename, {
  	root: './server/public/images/' + dirname
  });
});

const defaultRouter = require('./routes');
app.use('*', defaultRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});