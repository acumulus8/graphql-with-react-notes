/*
in 'reality land' lives our actual, real data in the database (right now our json-server): The object containing our users array and companies array.

in 'graphql land' we enter into the data structure through our RootQuery which points us to the UserType, and then the UserType points us to the CompanyType. Right our schema is unidirectional and we can only access the company through the user (asking: what company the user works with), we cannot access the company in a another way yet (asking: what users work for this particular company).

when we make a query, this is what's happening. Lets say our query is: */
{
  user(id: "23") {
    firstName
    age
    company {
      id
      name
      description
    }
  }
}  /*

1) the query goes to the rootQuery with an args object containing the id of "23" (or whatever arg we pass to it).
2) the rootQuey then actually points us in the right direction to the user with ID "23" thanks to the resolve function.
      resolve functions are what take us from one location on the graph to another part of the graph (from rootQuery to userType, or userType to companyType etc. etc.)
3) the query is still asking for more though - the company information also - so the resolve function in the UserType then handles this, being called with the argument of parent type, containing the info from the first node on the graph with ID: "23" (the currently queried user)
4) this resolve function the makes the request and returns the promise from the company we are looking for and then the whole data structure is sent back to the user.

******** It's best not to get bogged down in the different Types we have to deal with when thinking about the Schema, but instead think of the schema, or data, as a bunch of functions that return references to other objects in our graph so each "edge" in our graph is a resolve function.
                  [User(id:23)]
                      |   \
                     |     \                          
    resolve(user23, {})     \
                |            \
               |      resolve(null, {id: 23})          
           [Company]         |
                      [RootQuery]
                           |
        Query: Find me user 23 and the company they belong to


Every node or point on the graph is actually just a data object that we can go from one to another using resolve functions


*/