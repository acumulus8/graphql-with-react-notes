/* 
the next part of the project is to create a single song component, which will hold 2 components: one to allow us to add lyrics to the component, and another to display a list of lyrics.

in order to fetch a single song: we need the ID and will use it as a variable in a named query. */
query FindSong($id: ID!) {
  song(id: $id) {
    id
    title
  }
} /*
variable: */
{
  "id": "variableHere"
}








*/