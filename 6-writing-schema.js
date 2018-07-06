/*
we start by importing the actual graphql library first and saving that to a variable.*/
const graphql = require('graphql'); /*

then we create a variable object the lists a bunch of functions or variables from the graphql library that we need to import and then save that to our variable we created earlier: */
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql /*
Next we create a variable that will store the first type of data we want to start working with: */ const UserType = /* and then we save to it a new instance of the GraphQLObjectType which takes an object of settings as an argument */ 
const UserType = new GraphQLObjectType({ }) /*
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
  name: RootQueryType,
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
  name: RootQueryType,
  fields: {
    type: UserType,
    args: { id: { type: GraphQLString } },
    resolve(parentValue, args) {

    }
  }
}); /*
the first argument, parentValue, we can ignore for now, and is very rarely used, more on that later. the second argument, args, corresponds to the args key, and the resolve function will now require whatever values were declared in the args property.







*/