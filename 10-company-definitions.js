/*
The next part of the app we will work on is to hookup relating a company to a user.

Each user will have a company property, with the value of an ID - the ID will then relate to the specific company with that ID and will contain an ID, Name, and Description.

FIRST: we'll update our db.json file to contain a company key, with an array of different companies to it (remember json objects and double quotes). */
],
"companies": [
  { "id": "1", "name": "Apple", "description": "iphone" },
  { "id": "2", "name": "Google", "description": "search" }
] /*

Then: we will add the "companyId" property and an ID value of 1 or 2 to our users. We will also add a third user to share the same company as one of the other existing users so we can see how GraphQL handles that.

We're now building more relationships between data and can extend our restful URL's in GraphQL: */
http://localhost:3000/companies or
http://localhost:3000/companies/1 or even
http://localhost:3000/companies/1/users
/* 
NOW: we need to create the new data type and create a CompanyType in our schema.js file.

now, ABOVE the UserType definition, we can add avariable containing our CompanyType, order of definitions is important and we will return to this topic later.
We declare it in a very similar fashion as the UserType definition: */
const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  }
}); /*

NOW: that we have the companyType in place, we need to relate the UserType and CompanyType together. The association between different types exactly as if it is another field. 

SO: we will begin by adding the comapny property to the fields of the UserType, set it to an object with the key of type and value of CompanyType. */
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType
    }
  }   /*

NOTE: behind the scenes, all Types are handled the same way - wheter they are the built in ones (GraphQLObjectType, GraphQLString, GraphQLInt) or our custom made Types (UserType, CompanyType)




*/