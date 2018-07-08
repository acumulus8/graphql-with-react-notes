/*
now that we can query every direction we want, now we'll go over a little more of the syntax of our queries:

queries so far have just been written as anonymous objects. */
{
  user(id: "23") {
    name
  }
} 
/*
but we can also label the query, which does not change the behavior of the query or the response, but instead just acts as a simple label: */
query {
  user(id: "23") {
    name
  }
} 
/*
not terribly useful, but it does get useful since we can actually apply a specific name to the query: */
query findCompany {
  company(id: "1") {
    id
    name
    description
  }
}
/*
now we can reuse the query, which helps out quite a bit on front end when we have a lot of queries flying around.

another thing to keep in mind is that the query lives between the opening and closing initial curly brackets, this allows to actually make as many queries as we want in the same query: */
{
  company(id: "1") {
    name
    id
  }
  company(id: "2") {
    name
    description
  }
} /*
however, this does cause an issue because each query shares the same property name, which will cause the data object returned have two properties named the same thing. We work around this by naming each query: */
{
  apple: company(id: "1") {
    name
    id
    description
  }
  google: company(id: "2") {
    name
    id
    description
  }
} /*
this will now return a data object with propperties name apple and google, each containing the respective fields we initially asked for. We could just rename one of them, still keeping each property name different.

if you are making multiple requests in one query, it can be duanting if your constantly retyping the same fields in each request (see above - all fields identical)

the solution is to create query fragments that list out the fields we want in a named object, and then we can reuse and spread that name in our request - fragment is written outside of the body of the query */
fragment companyDetails on Company {
  id
  name
  description
} /*
we use the keyword 'fragment' followed by an arbitrary but descriptive name we will reuse, and we call it 'on' the name we gave the dataType when we wrote it in our schema (hence the uppercase 'C' in Company) - the addition of the propper name is to do some type checking to make sure that the dataType we're querying actually contains the fields we are requesting.

It will return an error if the fields we request are not actually part of the dataType we are querying: */
fragment companyDetails on User {
  id
  name //error - no name property on UserType
  description //error - no description property on UserType
} /*

you will not usually see fragments inside of GraphiQL, but will find them commonly in the front end code.

we can now rewrite our initial queries making use of the fragment: */
{
  apple: company(id: "1") {
    ...companyDetails
  }
  google: company(id: "2") {
    ...companyDetails
  }
} /*

*/