/*
The next portion of the course will go through the front end development (using react and graphql), using a cloned repo from the instructor. The backend (everything we did earlier) is already completed so the focus can be on the front end. The backend does use a new tech we haven't used yet - MongoDB. So all the data is actually host on a real database. There is some config that will need to be done with MongoDB, but nothing to focus on.

    we will have to register for MongoLab so we can use a free instance of a MondoDB server for our data. we will sign up and use our own URI in the server.js file.

Webpack is also used (i assume for transpilation of React and *maybe* Apollo?)


1) set up a new mongo db database hosted remotely by MongoLab
    - go to mlab.com and sign in/register
    - click 'create new'
    - choose AWS for hosting
    - choose the 'sandbox' plan
    - choose virginia server farm
    - pick name
2) get and use a MONGO_URI - an address to the newly created instance of the remote database
    - click the db to expand it
    - we will use the string associated with the URI
    - the username and password in the URI string are not reffering to accound information, but to 'users' associated with the database.
    - click 'add database user' and fill out fields
        - keep name and password different from account information.
        - username: tim, password: tim321
    - the new user should be added and will have a read only? of false - privelages should include reading and writing.
    - copy the URI string
    - now we can use the URI!
3) connect to the database to store and use all of our data.
    - return to server.js and paste the URI into the string instance of the MONGO_URI variable.
    - replace <username> and <password> with the appropriate DB user credentials.
    - now we're ready to test.

4) now we can start the server by running 'npm run dev' in the terminal
    - this command handles mongodb, webpack, and react






*/