/*
***REGISTER GRAPHQL WITH EXPRESS

express is an http server - the browser will send a request to the express application, express will process it, and then send the date requested back to the source.

adding graphql adds an extra step:
  the browser sends a request, express recieves and asks if it is asking for graphql (if yes, then go to graphql, if no then work out the response and send it to user)
graphql is just one discreet component of the app, not the whole thing. The overall express app can have much more to it, but graphql is written to just be one tiny piece.

NOW: import express-graphql into the server.js.
  */const expressGraphQL = require("express-graphql"); /*
By convention, anytime we refer to graphql from here on out in our code we have to refer to it as GraphQL (uppercase matters);

NOW: add this code to have express-graphql look out for any graphql specific requests:
*/
app.use(
  "/graphql",
  expressGraphyQL({
    //can break the uppercase rule in these circumstances
    graphiql: true //dev tool that helps us use the premade application
  })
);
/*
NOW: run the express app in the terminal */ node server.js /*
and open up port 4000 in the browser */ localhost:4000/graphql /*
this will return an error object and message requesting a schema. 

we will see how to work with this.

*/