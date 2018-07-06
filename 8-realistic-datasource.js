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






*/