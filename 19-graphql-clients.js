/*
so far, everything we've accomplished can only be made useful in the GraphiQl interface, nothing has been rendered to a UI or frontend for the end user to actually interact with. We want to be able take the information out of GraphQl and display it with React.

The good news: we're going to just this!
The bad news: GraphQL is on the bleeding edge of the internet and web design tech. There are a lot of changes coming out concerning the front end side of things.

SO: we're going to take a look at some of the front end libraries to assist us with using GraphQL and look at the pros and cons of each of them.

In order to be able to use a library to display our graphql data we need to understand the information being shared between the client webpage and our express/graphql server. The query is they important part - what information is being exchanged.
    In chrome, we can view our response in the network tab of the devtools, under the XHR tab. when we make a query we can view the raw data being returned there (it's exactly the same as the data showing in GraphiQL)

    click on the headers tab, and scroll to the bottom to view the 'request payload'. we can see that the payload has 3 parameters: 
      1) operationName:
      2) query:
      3) variables: 
    The query is the exact character for character string as the written query. Of all the different libraries to work with, they all speak the language over the wire that we see as the query in the request payload.

    So far, there's nothing library specific about the payload that is being issued, any front end or back end client would be able to work with this so far. (there are some edge cases where certain libraries won't work well together, but more on that later)

Pretty soon we will have React front end in the browser, and this will be tightly coupled with a GraphQL client. THIS CLIENT will work exactly the same way as the GraphiQL interface:
    we will use React to pass off queries to the client, the client will send it to our back end, the back end will pass it back to the client, and the client will hand it to react to render and display. THE CLIENT will act as a bonding layer between the GraphQL server we've already written and React.

There are 3 JavaScript clients we can make use of in the browser.
1) Lokka - as simple as possible, allows us to make basic queries, mutations (basically the same as GraphiQL) but also does have a feature for caching.
2) Apollo Client - produced by the same guys as Meteor JS. It comes with a backend server as well as the front end client (server would replace the express server we have running). Has ambitious feature set while not being too hard to work with. The downside is it's made by the MeteorJS so this is a business to them.
3) Relay - extraordinarily complicated (mutations are very challenging), however the performance is amazing (can work well in 3rd world countries where the internet connections are bad). You pay the performance in complexity. The version out now is just version 1, and version 2 is supossed to be simpler.

    Reagardless of what you choose, the job is the same: send requests to GraphQL server, recive responses and forward the to React.

ONE LAST NOTE:
Apollo has a server available to use, and there is the express/graphql server that we're already familiar with. express/graphql is not part of the apollo stack.
    GraphQL Express is refered to as the reference implementation of GraphQL because it is the official implementation that FaceBook maintains. (it's documentation is the spec on how the server can be implemented). 

    The code that is written to make use of each is different, but neither one is inherently better than the other. 

    This course is going with the Express GraphQL server since it is less likely to get big API changes in the future. Apollo server is still in very active development and may get some huge changes. GraphQL express has been relatively stable.

    In terms of coding - the differences are that the apollo server comes with it's own markup language that resembles the mark up in the GraphiQL interface (seems like a bonus to me), and that the Express GraphQL server colocates all of the type information with the resolve functionality whereas the apollo server seperates type definition and resolve functions into two seperate concerns.








*/