/*
so far all of our code and general concerns have been with writing queries to access data. Nothing has been done about manipulating or changing any of that data. We're going to start looking into how to modify our data using a system called mutations.

**** mutations are meant to change our records in some fashion, create new records, delete old ones, or alter existing ones.

in the context of this project: json-server does have the ability edit records and it will show in our db.json file. we don't have to worry about the json-server at all, we'll only worry about the graphQL side of things.

currently, we have a path where the query goes to the rootquery which is then passed to the user type or company type. BUT mutations actually work on a totally different path - where we request a mutation, which is passed to the mutation (code we will write), which will then either add a user or delet a user

                      ↗  [UserType]
          [rootquery] -> [CompanyType]
[query] ↗
[mutation] ↘ 
            [Mutations] -> [addUser]
                        ↘ [deleteUser]  

the end operations - addUser and deleteUser are tied to the mutations, not actually tied or related to any of the DataTypes. All this code will go in a new object that will hold the logic to carry out the operation.

WE BEGIN!
1) in the schema file, above the module export, declare a mutation variable and set it to a new gaphqlobjecttype :), give it a name of 'Mutation' and will also have a fields property. So far, all similar - the big differences will occur in the resolve function. */
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {

  }
}) /*
in the fields object of the mutation is where we will declare our operations - here is where we start to diverge - the names of the fields should describe the operation, no longer similar to our other dataType objects.

2) in the fields object we will declare the first operation we want, addUser - an object - which will contain some keys: type, args, and resolve. */
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    type: ,
    args: ,
    resolve() {

    }
  }
}); /*
TYPE: here, the type actually refers to the type of data returned from the resolve function. THe difference from the other objects we've created is that collection of data you are working on and the type you return from the resolve function might not always be the same.

for the time being will set the value to what we think we will be working with most of the time, in this case UserType.

ARGS: will be some arguments or data to pass into the resolve function. We will pass the args object the keys that we know our data model uses when defining a user, and the values will be their data type.

3) now that we know about the type and args, let us code!: */
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    type: UserType,
    args: {
      firstName: { type: GraphQLString },
      age: { type: GraphQLInt },
      id: { type: GraphQLString }
    },
    resolve() {
      
    }
  }
})



*/