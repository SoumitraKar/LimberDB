var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  Project = require('./api/models/projectModel'), //created model loading here
  Sprint = require('./api/models/sprintModel'), //created model loading here
  Story = require('./api/models/storyModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Users');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var userRoutes = require('./api/routes/userRoutes'); //importing route
var projectRoutes = require('./api/routes/projectRoutes'); //importing route
var sprintRoutes = require('./api/routes/sprintRoutes'); //importing route
var storyRoutes = require('./api/routes/storyRoutes'); //importing route
userRoutes(app); //register the route
projectRoutes(app); //register the route
sprintRoutes(app); //register the route
storyRoutes(app); //register the route


app.listen(port);


console.log('Limber RESTful API server started on: ' + port);
