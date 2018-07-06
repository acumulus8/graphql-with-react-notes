/*
***** HOW GRAPH QL WORKS *****

The current model we are working with is all centered around the current user and the data we are retrieving is from the perspective of the current user:
  current user -> their friends -> the company and position associated with that friend.
imagine the relationship of the data models being swaped around quite a bit - an overhead that views all data simultaneously:
a graph is a table made up of nodes, and they are organized and connected with arrows or lines known as edges - these represent the relationships between pieces of data.
  understanding how our data fits into a graph like this is key to understanding how graphql works:
                  company
                    |
                  User -> position
  position \      /     |
          User -> -> User                 *****each user has a unique ID
  company /   \     /  \
                User -> company
                  |
              position

we're not changing how our data is stored in a database, we can still use mongo db, or postgres, mysql - whatever we want to store data - we're only changing our view of the data.

a query using this graph structue might look if we wanted to start with user 23, look at all of that user's friends (other users), and then find all of the companies that those users work at:
  find user23, then find all of the friends/users associated with user23, then, find the company associated with all of those friend and for instance, just get the name property off of that.
to write this in practice, we write, or execute that statement in the form of a query.
Query we would write to from a user to a friends company's name:

  query {  --declares the beginning of the query
    user(id: "23") {
      friends() { --no ID, returns full group of users
        company {
          name
        }
      }
    }
  }





*/