/*
this section will deal with server maintenance and the repetition of having to cancel and restart our server any time that we change our server code.

Nodemon will watch over our project files and automatically restart the server anytime the code changes. */
npm install --save nodemon /*

we will then update our package.json file with a script which will handle the automatic updating. */
"dev": "nodemon server.js" /*

NOW: when we run */
npm run dev /*
we no longer have to manually restart our server.
*/