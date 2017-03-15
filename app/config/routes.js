var React = require('react');
var ReactRouter = require('react-router');
var MainContainer = require('../containers/MainContainer');
var AmperContainer = require('../containers/AmperContainer');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var routes = (
  <Router history = {hashHistory}>
    <Route path='/' component = {MainContainer}></Route>
    <Route path='/amper' component={AmperContainer}></Route>
  </Router>
);

module.exports = routes;
