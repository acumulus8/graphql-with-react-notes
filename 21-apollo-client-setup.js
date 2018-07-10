/*
the index.js file in the client folder is where most of the apollo and graphql set up will take place.
a lot of what we will do is wrap our react code in helpers from the apollo library.
here's how that will work: 
the react app is a pretty small piece of the puzzle. - in between our react app and the graphql is the apollo provider and the apollo store.

the APOLLO STORE is what communicate directly with the graphql server, and stores data that comes back from it - a store of data that lives on the client side. everything coming from the graphql server.
  it doesn't care about the framework being used, it doesn't know or care that we're using react.
the APOLLO PROVIDER serves as a buffer between the store andthe frontend framework we're using.
  it takes the data from the store and injects it into the app we're building.
    - its the 'glue layer' between the apollo store and our react application.
    - this is where the majority of configuration will take place (the store is pretty standalone)

To BEGIN:
1) in the main application js file (in this case index.js) import the ApolloClient from 'apollo-client' and import { ApolloProvider } from 'react-apollo'

2) outside of the root component write: */
const client = new ApolloClient({}); /*
    - the object settings can be left blank right now since appolloclien comes with some preconfig based on some assumptions about the server being run througj */ app.use('/graphql') /* in the server file. More config would have to be added if you deviate from setting up your server this way.

3) in the root component, add an <ApolloClient></ApolloClient> component and pass it the client as props:
    - the idea is that we wrap all of our root code in the */ <ApolloProvider></ApolloProvider>
    /* pass it the client, and we can begin making queries. This is the minimum configuration to begin using GraphQL.
*/
const Root = () => {
  return (
    <ApolloProvider client={client}>
      Lyrical
    </ApolloProvider>
  );
};

ReactDOM.render(<Root></Root>, getElementByID('root'));
/*








*/