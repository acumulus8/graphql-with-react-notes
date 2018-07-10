/*
We will set up and import our React Router in the index.js file
will use the battle tested version 3, not the newer version 4.

1) import a couple helpers from the react router library */
import { Router, Route, hashHistory, IndxRoute } from 'react-router'; /*

the react router was glossed over pretty quickly since it's not really in the scope of the course.
our code for the route is wrapped in the <ApolloProvider></ApolloProvider> tags: */
const Root = () => {
  render () {
    return (
      <ApolloProvider>
        <Router>
          <Route component={App}>
            <IndexRoute path="/" component={SongList} />
            <Route path="song/new" component={CreateSong} />
          </Route>
        </Router>
      </ApolloProvider>
    )
  }
} /*
then we slowly get back into the graphql side of things and using the addSong mutation in the CreateSong component.














*/