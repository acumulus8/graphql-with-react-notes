/*
we're going to build an app that works with a data structure similar to the previous lessons, and go over the different technologies needed to make that happen.
1) first make an express server
2) then hook it up to a data store of some kind
3) then hook that up to a pre-built application called GraphiQL (made by the graphql team that helps make test queries)

see project in "users" folder.

run: npm init
download dependencies:  */ express express-graphql graphql lodash --save-dev /*
***express is used to make https requests and then send that data back to the user.
***express-graphql is a compatability layer to make the two work together nicely
***graphql is the actual library used to crawl through all of our data
***lodash contains utility functions that will come in handy over time.

then make a new file: server.js
**** start an express app */
const express = require('express'); /* --call in express */

const app = express(); /* --create a new express app */

app.listen(4000, () => {
  console.log('listening!');
}) /*


*/