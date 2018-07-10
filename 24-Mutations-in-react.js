/*
Now that we have the new page and component set up, along with the router to configure out URL there, we can begin working on the addSong mutation and hooking that up to our CreateSong component.

1) we begin by making the form in the CreateComponent class, then setting the <form></form>'s onSubmit function to: */
<form onSubmit={this.onSubmit.bind(this)}>

</form> /*
  - then we create the onSubmit function, and prevent the default functionality with event.preventDefault();

2) Now we head over to GraphQL to test out our mutation. */
  {
    addSong(title: "title here") {
      id
      title
    }
  } /*
  - remember: the body of the mutation is what is returned from the request.

3) we import the helper to allow us to write gql queries in react: */
import gql from 'graphql-tag'; /*
  - then we create the 'boilerplate' and write the mutation: */
  const mutation = gql`
    mutation {
      addSong(title: )
    }
  `; /*
  - this is where we run into our first issue, the title needs to be whatever the title state is, which is dynamically determined from the user. we cannot simply use this.state.title since state is not accessible outside of a React class component.










*/