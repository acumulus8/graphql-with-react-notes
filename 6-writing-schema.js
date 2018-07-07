/*
writing the schema file is about 50% of the work load when using graphql, where writing the queries is the other 50%

we start by importing the actual graphql library first and saving that to a variable.*/
const graphql = require('graphql'); /*

then we create a variable object the lists a bunch of functions or variables from the graphql library that we need to import and then save that to our variable we created earlier: */
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql /*
Next we create a variable that will store the first type of data we want to start working with: */ const UserType = /* and then we save to it a new instance of the GraphQLObjectType which takes an object of settings as an argument */ 
const UserType = new GraphQLObjectType({ }); /*
The settings are not actually properties of the user yet, but the name of the data object, and the fields of the data object. The name is just what we want to call it, and the fields are actually the properties that we want to contain information in this data object: */
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphyQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
}); /*

==============
ROOT QUERIES
==============
a root query is something that allows us to jump into our graph of data. the root query will contain some logic that allows it to know where to go based on the instruction we give it.It's like an entry point into our data.

NOW: decalare a root query variable and save to it a new instance of the GraphQLObjectType object*/
const RootQuery = new GraphQLObjectType({

}); /*
In it we declare the settings for the new object, a name key with keyword value, and a fields object that contains the name of the data we want with the value of an object containing more keys and values. */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } }
    }
  }
}); /*
args, in this case, are required for making a query. so this is saying that if you make a rootquery for a user and pass along an ID (the args) with the query, then you will receive back a set of data as UserType.

NOW: we add a resolve function. everything so far is saying what our data looks like, and the resolve function is meant to actually go and get the data. */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
  
      }
    }
  }
}); /*
the first argument, parentValue, we can ignore for now, and is very rarely used, more on that later. the second argument, args, corresponds to the args key, and the resolve function will now require whatever values were declared in the args property.

normally the code in the resolve function would talk to a database, but for the purpose of this project we will work with a hard coded list of users array saved to a variable.

NOW: that data is saved as an array of user objects containing the fields we talked about earlier. we will also need to import lodash. */
const _ = require('lodash');/*
NOTE: lodash is only needed when working with the hard coded date and will not be used once we start writing http requests to outside servers.

lodash is used to help us crawl through our data, from one objecttype to another.

NOW: in the resolve function, we want to code: */
resolve(parentValue, args) {
  return _.find(users, { id: args.id });
} /*
we return a _.find (lodash.find) function that accepts the data we want (the users array containing user objects), and the ID of the user we want - this ID is automatically passd down when the ID is passed into the rootquery call.

so far the rootquery is looking like: */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      }
    }
  }
}) /*
FOR NOW: normally we would still have more to add (more robust options etc.), but for now we are going to merge our two object types (user type and rootquery) into a graphql schema object, and then hand that back to the graphql middleware in the server.js file so we can start working with what we have in the browser.

NOW: we need to import the GraphQLSchema helper from the graphql library - we add that to our graphql object variable at the top */
const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema
} = graphql; /*
this will take in a rootquery and returns a graphqlschema instance.

NOW: we create the instance of the schema and export it to make it available elsewhere: */
module.exports = new GraphQLSchema({
  query: RootQuery
}); /*
NOW: we import the schema into the server.js file and then pass it to the expressGraphQL middleware object (the expressGraphQL call inside the app.use function)

NOW: we can restart the server (node)
=============================================
remember: http://localhost:4000/graphql
=============================================







*/