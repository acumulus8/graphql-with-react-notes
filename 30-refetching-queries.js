/* 
the newly created song is being made and sent to the server, but the query isn't re-running and not fetching the data to display.

we handle this by adding a 'refetchQueries' property to the function that's handling the mutation (i think the main point is that you add this to any query or mutation in which you will need a query to re-run - in this case its this mutation that should re-trigger the query to fetch the lists of songs): */
this.props.mutate({
  variables: { title: this.state.title },
  refetchQueries: [{ }] //this property takes an array of queries to refetch
}); /*

the only issue is that the query we want to refetch is located in the other file. A common convention is to make queries we write accessible to other filesf (without copying and pasting - in practice we don't duplicate queries). We do this by writing our queries in a seperate file, and then importing them and making use of them into whichever files need them.

1) create a new folder named 'queries' in our 'client' folder.
2) create a file describing the query we want - in this case 'fetchSongs.js'.
3) import 'gql' from graphql-tag and export default the query we want to write.
4) now it's ready to be used in any file we want to import it into. */
import gql from 'graphql-tag';

export default gql `
  songs {
    id
    title
  }
`; /*
5) in the file using the query (SongList), we can delete the hard coded query, import it : */ import fetchSongs from "../queries/fetchSongs"; /* and replace 'query' in the export at the bottom with 'fetchSongs'.
6) in the file we need to need to declare the 'refetchQueries', import the file, and then in the query/mutation where we want the refetch the query, (refetchQueries property which takes an arry of objects) - each object can take 2 properties, the 'query' property and a 'variables' property (the variables property is there if the query we are asking to rerun need any variables to run - in this case, we don't need variables.) */
import fetchSongs from "../queries/fetchSongs";
...later
this.props.mutate({
  variables: { title: this.state.title },
  refetchQueries: [{ qerury: fetchSongs }]
}) /*
with the order of operationg being that it is, there seems like a risk of the query be fetched twice (run mutation, refetchQueries, .then() the <Redirect> back to the <SongList> component which will rerender and call the query) - luckily apollo foresaw this and WILL NOT run a duplicate query, thereby saving some resources.








*/