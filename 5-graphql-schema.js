/*
GraphQL middleware options - this is part of the error message we received.
*/ app.use()/* is how we wire up a middleware to an express application
middlewares are tiny applications meant to intercept requests as they come in through an express server. So when we register graphql in our app.use() call, we are registering it as middleware.

Options must contain a Schema - part of the error message
This refers to the options object that we called into the app.use() registration. You have to provide a schema along with these options.

a schema file is how we tell graphql how all of the data is related and organized. This is the lynch pin of the graphql application -
  this is what tells graphql what type of data we are working with, and how all the relations play out between those different pieces of data.

NOW: Make a new root folder named */ schema /* and a new file in that */ schema.js /*
schema.js contains all of the knowledge required for telling graphql exactly what the applications data looks like. most importantly what properties each object has, and how exactly how each object is related to eachother.
  ex. every user will have a first name, has a reference to a company and a position, also, every company and position each have a name 
    presumably, we also need a way to show how each user is related as well.



*/