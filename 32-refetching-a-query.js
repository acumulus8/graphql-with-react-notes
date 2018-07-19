/* 
previously, to refetch a query, we called the query as a property in the mutation that we are calling. We don't always have to refetch queries the same way. This will go over a new way to do that: 

remember that every mutation returns a promise which we can chain a 'then' statement and arrow function on to. The current mutation and new chain will work as follows: */
onSongDelete(id) {
  this.props.mutate({ variables: { id } })
    .then(() => this.props.data.refetch());
} /*
this.props.data is added to our component automatically by graphql. refetch is an available function that comes with 'data' from the react-apollo library. it will automatically refetch data using any query that is associated with the current component (in this case there is only one query associated with the component(fetchSongs) so it will run that again.)

why use this method over the refetchQueries property from earlier???? It depends on how you are trying to update the query associated with which componnent in your hierarchy. We used the 'refetchQueries" property earlier BECAUSE the query we wanted to rerun wasn't associated with the component we were using to recall it. The songsList component houses the fetchSongs query, so we are able to use the refetch() function associated with the data object located in the component. You can only call the refetch() function if the query associated with the component you are trying to rerun the query in. We could use 'refetchQueries' in the songsList component if we wanted to, it just comes down to preference. refetch() function also has the advantage of automatically rerunning on the server so it will blow away any pre-existing data associated with the component.







*/