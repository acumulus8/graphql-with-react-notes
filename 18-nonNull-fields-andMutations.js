/*
so far, our first mutation, addUser, will do just that. Concerning the args object, it is fair to say that when we eventually use the mutation, a firstName and age should be required, since a user without that info would be fairly pointless. However, a companyId should probably not be required, since it's fair to assume that some users may at some point not have a job or be affiliated with a company.

To handle this situation, we will set up some level of validation.

1) To do this, we will wrap the GraphQL... type in a new nonNull: */
{
  firstName: { type: new GraphQLNonNull(GraphQLString) },
  age: { type: new GraphQLNonNull(GraphQLInt) }, 
  companyId: { type: { GraphQLInt } }
}, /*

this tells our schema that whenever someone calls a mutation, they must provide a firstName and an age or else an error will be thrown.

new GraphQLNonNull() is very low level and only asserts that a value must be passed in - nothing like a name with minimum seven characters, or an age above or below a certain number.

3) this is a helper so we will have to destructure it off of the graphql object.

the use of GraphQLNonNull() is really up to the discretion of the developer where we feel it's necessary for our application.

SO FAR: we've created a mutation that will deal with the UserType and we've defined the args it will be dealing with. 2 of those are required for the operation to run and one is not. The only thing left is to fill in the resolve function. Remember, the resolve function is where the actual operation will take place.

4) write the resolve function - the arguments to pass in are the same as the other resolve functions except that we will destructure the args object since only 2 of the keys are required (parentValue, args). Then we put in a post request to the json-server users array. */
resolve(parentValue, { firstName, age }) {
  return axios.post('http://localhost:3000/users', { firstName, age })
    .then(res => res.data);
}
/*
the second argument is the destructuring of the args object since only two of the fields are required.

then we return an axios.post request, where the first argument is the endpoint for where we want the data to land, and the second argument is an object of the properties we require to run this addUser operation.

NOW: the mutation object is not associated with anything yet, so we need to associate it with our GraphQLSchema, it already says that there is a RootQuery for it to use, now we will tell it that it has a mutation it can use also: */
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation //es6 magic where the property name and value are identical :)
});
/*
Now we are ready to test and use the operation - mutations have a slightly different syntax than queries (psst! we just add the keyword in front of the object) */

mutation {
  addUser(firstName: "Tim", age: 30) {
    id
    firstName
    age
  }
}
/*
inside the body of the addUser mutation, we must ask for the data that comes back, or rather, what got resolved from the resolve function. The resolve function will resolve with the record that was just created on the json-server. even though we don't pass it an ID, it will automatically be assigned one.

5) now we will make the deleteUser mutation. This will be a sibling of addUser, a property in the fields object. This is exactly the same as the addUser function EXCEPT FOR:
  - the name of the property is deleteUser
  - we only need ID as args (we will require it, since from a UI perspective we wouldn't want to be able to delete a user unless we knew exactly who it was)
  - the resolve function is axios.delete
  - the endpoint is written in a template string to interpolate the ID of the user to delete */

  deleteUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args) { //or { id } in replace of args
      return axios.delete(`http://localhost:3000/users/${args.id}`)
        .then(res => res.data)
    }
  }
/*
there will not be anything returned this time after the request to delete is made - graphql does expect it, but json server does not send anything.

6) Add an editUser mutation.
ONLY DIFFERENCES:
  - name
  - args, include all properties so they're available to edit, MUST have an ID
  - resolve uses axios.patch request, the arguments is the args object (or destructure it)
  - http request must contain a second argument of properties that could be updated if the dev/user needs to update

NOTE: the request is made with a PATCH request since PUT would actually override all the current data, and even the current data not given. So if you called the mutation and included only an ID and name, then the data saved in the DB would update what was given, but then every property not passed to the mutation would now be overwritten as NULL in the database.
  PATCH will only update the information passed through the mutation and leave everything else AS IS. */

editUser: {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }, 
    companyId: { type: GraphQLString }
  },
  resolve(parentValue, args) {
    return axios.patch(`http://localhost:3000/users/${args.id}`, args)
      .then(res => res.data);
  }
} /*

The mutation will include a response so the mutation should be called accordingly: */
mutation {
  editUser(id: "40", firstName: "New Name", companyId: "newIdNumber") {
    id
    firstName
    companyId
  }
}
/*







*/