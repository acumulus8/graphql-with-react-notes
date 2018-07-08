/*
So far we have the ability to ask for a user and data associated with that user, but no way to ask about a company (only) and only data associated with that company. we don't have a field on the rootquery that allows us to do that yet.

GOAL: to go straight from a root query to a company and be able to make queries about a company only.

NOW: in the rootQuery, as a sibling to the user property, we can add a company property and set it up with almost the same exact structure as the user property - where the company will have a type, an args prop with an ID of the type GraphQLString, and resolve function that requests and handles the promise: */
company: {
  type: CompanyType,
  args: { id: { type: GraphQLString } },
  resolve(parentValue, args) {
    return axios.get(`http://localhost:3000/companies/${args.id}`)
      .then(res => res.data);
  }
} /*

CURRENTLY: our entire rootQuery looks like: */
const RootQuery = new GraphQLObjectType({
  name: "RootQeryType",
  fields: {
    user: {
      type: UserType,
      args: {id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(res => res.data);
      }
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString} },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/companies/${args.id}`)
          .then(res => res.data);
      }
    }
  }
}) /*

We can now make queries specifically to companies, in the same manner we did with users, but no longer having to go THROUGH users.




*/