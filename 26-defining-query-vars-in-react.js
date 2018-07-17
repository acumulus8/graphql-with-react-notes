/* 
so far, only used queries in graphql
this allows up to treat mutations like functions, and can reuse them throughout our application.

our current React mutation looks like: */

const mutation = gql`
  mutation {
    addSong(title: ?) {
      id
      title
    }
  }
`; /*
That new function like mutation in GraphiQL looks like: */
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
} /*

How to adjust the mutation in React to get ready to accept dynamic information from a component: 
1) we adjust the mutation in our component to reflect the addition of the variable just like our mutation in graphql.
2) just like before we import {graphql} in order to group our component and mutation together in the export statement. */
  export default graphql(mutation)(SongCreate); /*
- SO FAR - all the same as writing a simple query, WHATS NEW is that the component will no longer have access to */ props.data /* now the component will get access to */ props.mutate /*
- if we run, */ this.props.mutate /* then the component will run the mutation we defined below the component.
- NOW we just need to get the variable into it.
 
3) now, in our onSubmit() function, we can call this.props.mutate, and pass it a config object with a variables property (an object), which will contain the variable definition we are using in the mutation. */
onSubmit(e) {
  e.preventDefault();
  this.props.mutate({
    variables: {
      title: this.state.title
    }
  })
} /*
    - in this case we are defining the title variable with this.state.title because that is where the value from the input is going.

It now works just fine. Our only limitation so far is that it is not readily apparent how this.prop.mutate would handle mutliple mutation (an add and delete for example).










*/