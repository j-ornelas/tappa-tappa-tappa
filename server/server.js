const express = require('express');
const app = express();
const port = process.env.PORT || 4200;
const title =  `TappaTappaTappa`;
const path = require('path');
const bodyParser = require('body-parser');


app.use('/', express.static(path.join(__dirname, '../client/public')))
app.use('/', bodyParser.json())


app.listen(port, () => console.log(`${title} listening on port ${port}!`))
