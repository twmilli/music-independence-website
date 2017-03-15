var React = require('react');
var PropTypes = React.PropTypes;
var Song = require('./Song');

var MusicList = function(props){
    var songs = props.songList.map(function(song, key){
      if (key > 9){
        return;
      }
      return(
        <Song key={key}
          id={song.id}
          price={song.price}
          artist={song.artist}
          downloads={song.downloads}
          name={song.name}/>
      );
    }, this);
  return(
      <tbody>
        {songs}
      </tbody>
  );
  }

module.exports = MusicList
