var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  Project = require('./api/models/projectModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


console.log("111111");
var userRoutes = require('./api/routes/userRoutes'); //importing route
console.log("222222");
var projectRoutes = require('./api/routes/projectRoutes'); //importing route
console.log("3333333");
userRoutes(app); //register the route
console.log("4444444");
projectRoutes(app); //register the route


app.listen(port);


console.log('Limber RESTful API server started on: ' + port);
