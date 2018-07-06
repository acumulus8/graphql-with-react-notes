/*
to use the interface, run the server, then go to http://localhost:4000/graphql

the left panel is where queries are written, the right panel is where they are returned. The docs button contains information based on the object types that have been created. write queries and press play to run them.

syntax: */
{
  data(argsNeeded) {
    propertyWeWant,
    anotherPropertyWeWant,
    andReallyAnyPropertyWeWant
  }
} /*
for our project so far the query will look like: */
{
  user(id: "23") {
    id, 
    firstName,
    age
  }
} /*
we the query will return: */
{
  "data": {
    "user": {
      "id": "23",
      "firstName": "Bill",
      "age": 20
    }
  }
} /*
the query we write is sent to the RootQuery type. The RootQueryType then takes the query to enter into our graph of data.

we specified 'user' as the field of the query, so the RootQuery went and looked for the corresponding field name in it's field object.

the return statement in the resolve function located in the RootQuery automatically returns a raw JavaScript object from the lodash helper, which we did not have to coerce into doing.

we can easily get other uers by adjusting the id argument, and change what properties to retrieve by simply adding or subtracting anything we want. We will only recieve what we want, no more or less (avoiding the issue of the 'overfetching' data we don't need from Restful https requests).

if we try to find a user that doesn't exist then we just get null.

if we don't provide an argument, then we will get an error back that basically says "we were expecting to return the name of a specific argument, or ID"


*/