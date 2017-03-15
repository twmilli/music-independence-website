# Music Independence

What is it?

&nbsp;&nbsp;&nbsp;&nbsp;Music Independence is an app that cuts out the middle man in the music distribution game. Your payment goes directly and fully to the artists (minus the seperate BTC blockchain fee).
    
  
How do I use it?

&nbsp;&nbsp;&nbsp;&nbsp;Download and configure the [program](https://github.com/twmilli/music-independendence) (run it for the first time and it will automatically start the configuration process), then start the program as a client.
    
  
I did that. Now what?

&nbsp;&nbsp;&nbsp;&nbsp;Now type in some IDs and start buying some music!
    
  
How do I find music?

&nbsp;&nbsp;&nbsp;&nbsp;The NodeJS project included in this repository features a page of the most recent songs and a search engine.
    
  
But there's nothing there?

&nbsp;&nbsp;&nbsp;&nbsp;That's because no one has uploaded music. It is also because the network isn't up yet as the code isn't finished.
    
  
How do I upload music?

&nbsp;&nbsp;&nbsp;&nbsp;While configuring your client, say you want to upload music, and then start your client as a node. Then upload some songs!&#x002A;
    

What still has to be be done for this amazing service to launch?

&nbsp;&nbsp;&nbsp;&nbsp;*The "gen IP" and "ser" functions have to be finished.&#x002A;&#x002A;
    
&nbsp;&nbsp;&nbsp;&nbsp;*The Bitcoind interface must be added.
    
&nbsp;&nbsp;&nbsp;&nbsp;*The Tracker option must be completed with the described API so the NodeJS code can work.&#x002A;&#x002A;&#x002A;
    
    
Anything more?

&nbsp;&nbsp;&nbsp;&nbsp;We also want to add:
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*A way to pernamently choose client/node instead of choosing every time on boot.
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*More features to the NodeJS search/a better download/info page.
       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*The ability to auto clean up corrupted song lists on the local drive.
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*An automatic removal of bad entries in the database.
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*An install script.
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*A conversion from txt to bin files.
        
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*A way to vote off harmful users.
        
        
Wow! When will this be ready?

&nbsp;&nbsp;&nbsp;&nbsp;We have no idea. Both of the developers have school and made this for a hackathon. We live in seperate states. This project is not commercially viable thanks to our design. We will push occasional updates and try to at least meet a workable release. If there is interest/incentives, we will step up our efforts.

&#x002A;This is not an invitation for you to commit piracy. Our service will support free songs, and is DRM free, yet we do not condone or encourage piracy. We plan on having a feature where nodes can vote a user off the network for piracy/spam. As nodes will mainly be done by artists selling songs, as they must keep a node open for their song to be available, we hope to keep this free, open P2P network in control.

&#x002A;&#x002A;"gen IP" -- get an IP to connect too. "ser" -- get amount of free server sockets on the entire network.

&#x002A;&#x002A;&#x002A;"ID;Price;Song Name;Artist;Song Length;Downloads" -- Send new data to the site.

&#x002A;&#x002A;&#x002A;"U;ID;Price;Song Name;Artist;Song Length;Downloads" -- Update existing data. 
