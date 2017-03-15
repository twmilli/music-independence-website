var React = require('react');

var SearchBar = React.createClass({
  getInitialState(){
    return({
      value: ''
    });
  },
  render(){
    return (
      <div className="search-bar">
        <i className="fa fa-search">
        </i>
        <input type="text" placeholder="search" id="search-text" onChange={this.props.onSearchInput}>
        </input>
      </div>
);
  }
});

module.exports = SearchBar;
