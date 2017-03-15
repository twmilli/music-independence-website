var React = require('react');
var MusicList = require('../components/MusicList.js');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000');
var SearchBar = require('../components/SearchBar');
var Link = require('react-router').Link;
var MainContainer = React.createClass({
  componentDidMount(){
    var that = this;
    socket.on('song', function(data){
      var newList = [];
      if (that.state != undefined){
        newList = that.state.songList
      };
      newList = [data].concat(newList);
      that.setState({
        songList: newList,
        displaySongs: newList.slice(0,10)
      });
    });
  },
  getInitialState: function(){
    return{
      displaySongs:[
        /*{id: 0,
        name: 'DEBUG',
        price: 'free',
        artist: 'DEBUG',
        downloads: 0}*/
      ],
      displaySongs:[
        /*{id: 0,
        name: 'DEBUG',
        price: 'free',
        artist: 'DEBUG',
        downloads: 0}*/
      ]
    }
  },
  handleSearchInput(e){
    var query = e.target.value.toLowerCase();
    var displaySongs = [];
    var songList = this.state.songList;
    var song;
    var name;
    var artist;
    for (var i = 0; i <this.state.songList.length; i++){
      song = this.state.songList[i];
      name = song.name.toLowerCase();
      artist = song.artist.toLowerCase();
      if ((name.search(query) != -1) || (artist.search(query) != -1)){
        displaySongs.push(song);
      }
      if (displaySongs.length >= 10){
        break;
      }
    }
    this.setState({
      displaySongs: displaySongs,
      songList: songList
    });
  },
  render: function(){
    return(
      <div>
        <table className='music-table'>
          <caption>
          Music Independence
          <SearchBar onSearchInput={this.handleSearchInput}/>
          </caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>Song Name</th>
              <th>Price</th>
              <th>Artist</th>
              <th>Downloads</th>
            </tr>
          </thead>
              <MusicList
              songList = {this.state.displaySongs}/>
        </table>
        <h3 className='bottom-label'>This is running on a node</h3>
        <div className='link-wrap'>
          <Link to='/amper' className='amper-link'>Upload with Amper</Link>
        </div>
      </div>
    )
  }
});

module.exports = MainContainer;
