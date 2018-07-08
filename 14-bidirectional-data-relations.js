/*
we can now query companies, but unlike how we are able to query users - where we are able to query the user and it's data, as well as data about the company they work for - we cannot yet query a company and request all the users who work at that company. 

this diagram shows all the relationships we've built in our graph so far: 

        User ---> Company
          ↖       ↗
          RootQuery

we want to be able to go between the company and the user both ways. when we go from company to user, we should expect to return a list of users who work at the company (as opposed to going through the user expecting to return a single company that the user works at).

1) first we need to check out our json server and figure out how to get a list of users given a company ID. for instance, the url might look like: 
      http://localhost:3000/companies/1/users
where 1 is the company ID and users is the list of users who are associated with that company.

NOW: we can add the user property to the companyType object, which will contain a type - a new type here which we will have to destructure from the graphql library - GraphQLList: */
fields: {
  id : { type: GraphQLString },
  name: { type: GraphQLString },
  description: { type: GraphQLString },
  users: {
    type: new GraphQLList(UserType), //no args required
    resolve(parentValue, args) {
      return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
        .then(res => res.data);
    }
  }
} /*

no args are required for the resolve, and we will be working with the parent value since the query is coming down from the company already.

this actually returns an error with 'UserType not being defined' and we will look at that in just a bit.


*/