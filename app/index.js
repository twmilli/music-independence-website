var React = require('react');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById("app")
);
