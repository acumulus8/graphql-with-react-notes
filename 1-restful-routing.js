// why graphql? : why does graphql exists?
/* 
  ===meant to solve some existing problems. the course will get into why? what? and how of graphQl.

RESTFUL ROUTING
  Graphql and relay solve problems with restful routing, we'll need to brush up on the basics of restful routing to move forward:
  *******
  
  Restfull routing is a some set of conventions for manipulating a collection of data hosted on a server.

  common rules around http request used for creating, reading, updating, or deleting data that lives on a server. not a set of hard coded rules, just conventions across multiple languages.

  the 5 conventions for http requests are 5 seperate actions - POST, GET, GET, PUT, DELETE.

  the basic structure of an http request goes URL/<name of action> and in some cases /:id

  you have to style your URL's to match the routing made available by the team or restrictions to the database. For example, in a situation where users will create and work with posts: 
    URL/users/23/posts = POST = create a post associated with user 23.
    URL/users/23/posts = coulbe be a GET = fetch all posts created by user 23.
    URL/users/23/posts/14 = GET = fetch post 14 by user 23.
    URL/users/23/posts/15 = coulbe be a PUT = update post 14 by user 23.
    URL/users/23/posts/18 = could be a DELETE = delete post 18 created by user 23.

    these are the ways we would style our requests to adehere to restful conventions dealing with nested records very specific to one user.

    this is where restful API request start to break down, they get wierd and don't handle nested records very well.

    ****WHERE RESTFUL REQUESTS START TO BREAK DOWN****
    restful requests work fine where nesting is not too deep 
      ex. url/users/23/posts = from the url search users, show me user 23, show me all posts by user 23.

    a more complicated example that get difficult with restful API's
      ex. list of users, or friends showing on UI, each box is a particular friend that contains brief info of the user: user image, user name, company name, position name or title. if you were to build this functionality in mongo db or how might you store this date: "make a user model that contains all possible info about that person (basic required info for every users - name, company name, position, image, id"). It would be hard (not easy, not obvious) to obtain info about all users who work at a specific company.

      instead, we would not just have a user model, but also a company model, and a position model each containing a specific ID, name, and description associated with that user. 
      ***USER
      property name--    Type--
      id                 Id
      name               string
      image              string
      company_id         Id
      position_id        Id

      ****COMPANY
      property name--    Type--
      id                 Id
      name               String
      description        String

      ****Position
      property name--    Type--
      id                 Id
      name               String
      description        String

      in diagram it would look like 

                             -> company
                      friend -> position
      current user ->  friend -> company
                      friend -> position
                             -> company

      how might we use Restful conventions to access that structure of data?
      it works well with the first few nests
      /users/23, then /users/23/friends, but then how to access the company and position infor specific to that friend??? very very very challenging:
      something like /users/friend1/companies, or /users/friend1/positions, or /users/friend2/companies, or /users/friend2/positions each with a unique ID. This compiles out to a ton of requests, each one unique just for that specific piece of info.

      or we could try:
      /users/23/friends/companies, or /users/23/friends/positions - this gets more realistic, but also very customized, very particular - imagine if these were all over our site, each request would have to be created, each route created.

      and finally a better way, but starts to break restful conventions:
      /users/23/friends_with_companies_and_positions
      this is a custom endpoint built on. breaks restful conventions.
      
      none of these options are great, and we realize that restful requests start to run into issues with highly relational data, or issues with too many http requests being built and run, or very customised endpoints that are very tightly coupled with very particular features on our front end.

      another problem is that we would also recieve way more datat than we would need. each request for a company might return the whole company data structure when all we really need is name - in turn, we are passing way to much info back to the client.


*/