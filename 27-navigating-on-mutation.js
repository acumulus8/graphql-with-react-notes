/* 
Now that we are able to make a successful mutation, we'd like the UI experience to work in a way where the user is take to the list of songs, and for the list of songs to contain a button to be take to the SongCreate component.

1) we simply add a react-router Link with the file path */ to="/song/new" /* as well as some material-ui class names.

2) In the SongCreate component, we import "Link" againg to add a "back" button at the top, as well as */ hashHistory /* 
3) then we chain a */ .then(() => ) /* onto the end of the mutation and add the hashHistory.push to it: */
.then(() => hashHistory.push("/")); /* 
which completes the process.




*/