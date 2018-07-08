/*
the error saying 'UserType is not defined' is because a classic JS issue: we're trying to access avariable before it's declared (UserType is below CompanyType). We cannot just simply switch them because the UserType references Company type also, leaving us with the same issue in data object.

we have an order of operations issue, but there is a workaround:
WE NEED to turn the fields property into an arrow function, which returns everything in it. We do this by having empty parens, arrow function, and then wrap the fields object in parentheses (es6 magic - no reason to declare 'return'). */
fields: () => ({
  //code in fields property stays as written.
}) /*

this is basically saying that the function has been defined, but is not executed until the entire file is executed (all code written is run, then internally graphql runs the function).

this is an issue with javascript closures and closure scopes.

*************************** we will give the same treatment to the UserType.

now everything works!

Interesting note: now that we have the relationshiphs built this way, the data can be queried recursively, meaning we could search a company, users at the company, the company the user works for, info about the company, users that work at that company, the company he users work for etc. etc. etc.



*/