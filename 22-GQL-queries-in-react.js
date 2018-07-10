/*
NOW: we have our basic apollo client and provider config setup, along with a basic react component ready to display some information.
we can begin making queries.

Basic GraphQL + React Strategy: (checklist to help get data from the server into our components)
1) Identify data required by the individual component
  - in this case, our song list needs to show a list of each song, and all we care about right now is the title of each song. (no other data about the song needed)

2) write query in GraphiQL (for practice) and then write it in the component file
  - queries are not valid JS, so we cannot just simply write our queries like we would in GraphiQL in our react components.
  - we need to make use of a helper, graphql-tag */ import gql from 'graphql-tag'; /*
  - at the bottom of the file outside the component, we write our query 'boilerplate' : */
    const query = gql`
    
    `; /*
    - notice use of back ticks
  - no we simply write our query out within the back ticks. wa la! */
    const query = gql`
      {
        song {
          title
        }
      }
    `; /*
    - quick reminder, this is a declaration of a query, nothing being executed.

3) Bond query + component in some fashion
    - we start by importing another helper: */ import { graphql } from 'react-graphql'; /*
    - now we alter our export default statement: */
      export default graphql(query)(SongList); /*
      - the graphql(query) porition simply returns a function, and then (SongList) portion is actually calling that function.
      - this bonding step is what actually exectues the query when our component gets rendered to the screen.
      - where the y axis = time, the process of rendering and the query being made and executed is: 
      Time        [Component Rendere]
        I         [Query issued (executed, sent)]
        I             .
        I             .
        I             .
        I             .
        I         [Query complete]
        I         [Rerender Component]
      - fetching the data is asynchronous and will take some amount of time.
      - the last big thing we need to figure out is where the data is actually rendered. (the query was sent and executed, and returned, now what?)
    - the data returned from the query is placed inside our component's prop object!
      - this is fitting since in react, how does anything get anywhere? PROPS! YAY!
    - if you */console.log(this.props) /*, you'll see the console.log run twice, once on initial load, and then again on the query completed and component rerender. The second one is where our data retrieved will be located.
    - the data is located in */ this.props.data.songs /*
    - the data is only available after the query is completed, if it were the case where the first one contained it, then the component is getting itself into a little bit of trouble by assuming that songs are always being passed to it, we might run into some error where the songs havent been fetched yet.
    - the data object is provided by the graphql library (the helper library (graphql) is what returns that object.)

4) Access data! (this is pure simplicity, Apollo and GraphQL do a lot for us, no having to explicity state what to fetch, how much, data types etc.)
  - we can now use the data.
  - we will write a function, renderSongs() in our component: */
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li>
          {song.title}
        </li>
      )
    })
  } /*
  - then, in our render function, we can call the function */
  render() {
    return <div>{this.renderSongs()}</div>;
  } /*
  - however, this will return an error "cannot read property 'map' of undefined" - this is becasue the function is being called and trying to render the data before the data has been returned (remember, the console.log got called twice earlier, once where the loading prop of the data object was true (sending), and then the second time where the loading prop was false and the data was returned back to the component.)
  - to fix this, we can add an if statement to the render function! */
  return (
    this.props.data.loading ? <div>Loading</div> : <div>{this.renderSongs()}</div>
  ); /*
  - this will now get rid of the initial error and display the data on the page!
  - however, we still get an error about basic React stuff - each child in an array or iterator should have a unique "key" prop.
  - TO FIX THAT: include the id of each song in the query (const query = graphql``), and then add the key to the li of the renderSongs() method. */
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.key}>
          {song.title}
        </li>
      );
    })
  } /*

CURRENTLY: our project architecture looks something like: 
    [GraphQL Server]
          I
    [Apollo Store]
          I
          I ***Everything from here down is in React***
    [Apollo Provider]
          I
    [Root Element]
          I
       [Query] - attached to Component
     [SongList]
          I
    [pres] [pres] [pres] - this layer would be any other nested components that are passed data from the query through props




*/