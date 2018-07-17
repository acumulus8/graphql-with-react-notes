/* 
we need to be able to pass the title of the new song, from the component, into the new song mutation.

to take care of the issue, we think of the mutation as a function that we can pass information to. we will make use of 'Query Variables' - in graphql, that option is on the bottom left of the window. Query variables is something we can use to get information from a react component into a mutation or query.
    - we will use this with mutations quite a bit, and sometimes with just standard queries when we want react to customize the query based on some sort of information.
    - this will become especially helpful when we have to worry about filtering queries and pagination, where we only want a certain amount of information.

The syntax for queries and mutations will change bit when using query variables. Here is an overview of the structure: */
name can be anything   name of parameter (actually the type, no replacement for that)
          \           /
mutation AddSong($title: String) {
  addSong(title: $title) {  \
    id              |       Parameter type
    title           |
  }            where to get value from
} /*
the name of the function is not related to the schema or anything in the backend of the app, just an arbitrary name the will be used when we invoke the function. WHICH - contains the mutation.

the $title refers to the fact that we are creating a variable, and the name is determined by a '$' followed by what we want to call the variable, and the string refers to what type of value will be saved to the variable. then we can make use of $variable (in this case $title) anywhere in the body of the mutation/function we want. In this case we replace our hard coded title from earlier with this new variable.

Now, in GraphiQL, we can learn to define a variable. In the bottom left of the window, pull up the bar to open the variable window. In it, we create an object, then we write the variable name in quotes, and set it to the value we want. In this case the value must be a string: */
{
  "title": "Sprite vs. Coke"
}
/*
Then, if we run the mutation again we will create a song with the title "Sprite vs. Coke".

In perspective: the dollar sign only gets used in the mutation/function call and only refers to the fact the we are referencing a variable - it tell the function to go to our list of defined variables and look for a parameter name that matches exactly what comes after the $.









*/