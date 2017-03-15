/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp
server, but for some reason omit a client connecting to it.  I added an
example at the bottom.
Save the following server in example.js:
*/

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

http.listen(port, () => {
        console.log('listening on port: ' + port);
    });
var net = require('net');

var server = net.createServer(function(socket) {
	/*socket.write("1;0.00;Blank Space;Taylor Swift;3:30;0;\r\n");
	socket.pipe(socket);
  setTimeout(function(){
    socket.write("2;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 1000);
  setTimeout(function(){
    socket.write("3;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 2000);
  setTimeout(function(){
    socket.write("4;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 3000);
  setTimeout(function(){
    socket.write("5;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 4000);
  setTimeout(function(){
    socket.write("6;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 5000);
  setTimeout(function(){
    socket.write("7;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 6000);
  setTimeout(function(){
    socket.write("8;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 7000);
  setTimeout(function(){
    socket.write("9;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 8000);
  setTimeout(function(){
    socket.write("10;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 9000);
  setTimeout(function(){
    socket.write("11;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 9500);
  setTimeout(function(){
    socket.write("12;0.00;22;Taylor Swift;3:30;0;\r\n");
  }, 10000);*/
});

server.listen(1025, '127.0.0.1');

/*
And connect with a tcp client from the command line using netcat, the *nix
utility for reading and writing across tcp/udp network connections.  I've only
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with
example code from
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');

var client = new net.Socket();
client.connect(1025, '127.0.0.1', function() {
	console.log('Connected');
});

client.on('data', function(data) {
  data = "" + data;
	console.log('Received: ' + data);
  data = data.split(';');
  if (data[1] == "0.00"){
    data[1] = "free";
  }
  var songData = {
    id: data[0],
    price: data[1],
    name: data[2],
    artist: data[3],
    length: data[4],
    downloads: data[5]
  };
  io.emit('song', songData);
  console.log(songData);
  io.on('connection', function(socket){
    console.log('CONNECTED! TO FRONTEND');
    io.emit('song', songData);
  });
});
