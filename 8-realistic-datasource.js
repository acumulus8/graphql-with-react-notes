/*
we don't really want to work with hard coded data, but instead want live, dynamic data.

NOW: we will swap out the current hard coded data for something at least a little better (more dynamic information), but still not a database.

SO FAR OUR ARCHITECTURE IS SIMPLE: we have a browser sending requests to our Express/GraphQL server, which then would Ideally talk to a MongoDB, or postgres, or mysql server to return information using the resolve function.

potentially, the express/graphql server could reach out to other services which then reach out to a new database, an outside API, and any number of other outside servers and databases. (all of which would come back to the express/graphql server, which would then return the data to the browser).

the course will try both ways.

===========
Outside source of data located in secondary database contacted through an API
===========
will use JSON Server (search in google, first link is a github repo). this json server will be a completely seperate running process from the graphql process.

FIRST: download the dependency we will need: */
npm install --save json-server /*

THEN: create a db.json file in the root directory and we can populate it with json data.

Since the json server is running seperately from the graphql server, we will need to start the server seperately - we will add a script to the package.json file: */
"json:server": "json-server --watch db.json" /*
The only similarity between the two processes is that they live in the same root directory.

NOW: we run it using */
npm run json:server /*

===============================================================
ASYNC RESOLVE FUNCTIONS
===============================================================

note: http://localhost:3000/users URL will take you to the entire json object containing the user data, and adding a " / " followed by a specific user ID will take you to the object specific to that one user.

the requests made to the JSON server are asynchronous requests and the server will send back a promise to GraphQL. Nearly all data fetching we will ever do in a node application is asynchronous in nature and will return a promise from the resolve function.

PLAN: rewrite the resolve function in the RootQuery to send an HTTP request and return the promise that it generates. We could use fetch to handle this, but axios is what we will be going with.

NOW: install the axios library to handle the fetching - */
npm install --save axios /*
and we can import that into the schema file and get ride of the lodash import. Delete the hard coded data and the initial code written in the body of the resolve function (in schema.js)

NOW: in the resolve body write: */
return axios.get(`http://localhost:3000/users/${args.id}`) /*
axios makes the request and GraphQL waits for the promise to be returned to the query. 
*********** when axios's promise resolves, we get back a response object back where the actual data we want is nested in a data property: */
{ data: { firstName: "Bill" } } /*
  this is how axios chooses to handle promise handling, but the problem is that GraphQL doesn't know that the data is nested. We will have to finagle the response a bit before actually doing anything with the response: */
return axios.get(`http://localhost:3000/users/${args.id}`)
  .then(resp => resp.data) /*
in the future the response handling will be handled differently.






*/