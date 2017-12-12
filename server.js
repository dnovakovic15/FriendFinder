let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let htmlRoutes = require('./app/routing/htmlRoutes');
let apiRoutes = require('./app/routing/apiRoutes');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

htmlRoutes(app);
apiRoutes(app);

app.listen(3000)