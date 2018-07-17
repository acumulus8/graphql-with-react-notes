/* 
we want to add the functionality for a user to delete songs.

1) we write our mutation and test it in GraphiQL
2) we create a new query file in our query folder and paste in the code, then import it (in this case */ import deleteSong from "../queries/deleteSong"; /*)
    - now, the only issue is that the graphql helper (we are calling at the bottom of the SongList.js file) is not setup to take multiple queries as arguments. must maintain whats written: */
    export default graphql(fetchSongs)(SongList); /*
    - to get around this, we have to call the graphql helper again with an interesting order of operations: */
    export default graphql(deleteSong)(
      graphql(fetchSongs)(SongList)
    ); /*
    - we are basically saying:
    - call the graphql helper using the graphql function along with the mutation and immediately invoke with the other helper and query, along with the songlist.
        - there are third party helpers to help clean up the syntax, but for now apollo hasn't addressed this issue yet.
  
In the next portion of the course we added the delete button, bound an 'onClick' event that calls an onDeleteSong(id) function that takes an id as an argument. we got that id from the map method (and cleaned up the code by desctrucuring the 'song' that we were iterating over via the map method down to 'title' and 'id', and passed the id to the variables property of the this.props.mutate config body)









*/