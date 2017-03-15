var React = require('react');
var PropTypes = React.PropTypes;

var Song = function(props){
  return(

  <tr className="song">
    <td> {props.id}</td>
    <td className="name">{props.name}</td>
    <td>{props.price}</td>
    <td>{props.artist}</td>
    <td>{props.downloads}</td>
  </tr>

);
}
module.exports = Song;
