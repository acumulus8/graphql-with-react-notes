/*
the next step is to build a resolve function on the comapny property (in UserType object) so that graphql knows how to find the company that is associated with a given user.

THis is all about teaching GraphQL how to get from a user with a unique company ID and to get to that specific company and be able to access its data.

RIGHT NOW: the user model (the json object containing all the info which is stored in the server) doesn't completely match the UserType - all property names and value types between the two are the same except for the companyId property in the json user model, and the company field in the UserType. When property names and value types are the same between the data model and the DataType, no extra action is required. But when they differ, then a resolve function is required.

NOW: we will add the resolve function inside the company property of the UserType to help handle the differnces between the data model and dataType. It will take the same arguments as the resolve function in the RootQuery. for now we will just console.log the parentVale and args to see what we have to work with.
*/
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        console.log(parentValue, args);
      }
    }
  }
}); /*

the console log returns an object containing the data of the user we're querying (including the companyId property and the value!) and an empty args object.
SO: we will be able to use parentValue.companyId to get the information we want!

NOW: inside the resolve function, we can make a request to the server (right now, the localhost:3000) and ask for the /companies/and parentValue(the user queried)'s companyId */
resolve(parentValue, args) {
  return axios.get(`http://localhost:3000/companies/${parentValue.id}`)
    .then(res => res.data);
} /*

DON"T FORGET: to return the request and deal with axios' quirk of storing the query in an object labeled 'data'.


*/