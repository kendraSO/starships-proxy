const express = require('express');
var proxy = require('express-http-proxy');
var cors = require('cors')
const app = express();
const port = 3080;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


app.use('/proxy', proxy('https://graphql.org/swapi-graphql'));

app.use(cors({
    origin: 'http://localhost:3000'
}));
