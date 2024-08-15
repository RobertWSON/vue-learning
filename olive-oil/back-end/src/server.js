/* A a Node js Framework Express module in quotes is imported from an express library. */
import express from 'express';
/* Semi colon ; used at end of a code statement are optional due to automatic semicolon insertion. 
   Best practice to put ; in yoursef for improved readability and less errors as asi may not always 
   get your end of statements for your code correct and it makes code easier to maintain and debug.

/* Code below creates an instance of an express application by calling an express function. 
   A const is used to declare a constant and it is called this because it is an app variable that 
   cannot be reassigned to something else (usually a varable) later in code.   
   Using a constant to create an app object can have its properties (or contents) such as app.get
   changed. */
const app = express();

/* Create a port listen function for our app, with a first argument of port number followed by a 
   second argument a call back function that gets called when app is up and running */
app.listen(8000, () => {
    console.log('server is listening on port 8000')
    /* A message when app is running on localhost. (not related to localhost see below)
       console.log sends a message to console or as we know it command line or terminal, not web page
       and is used for debugging to see that server is starting. 
       Server listens, but it does not respond to a request at this stage as it needs an endpoint with 
       an app.get() function */
});

/* This is an express endpoint that is logic a server executes when it receives a specific request. */ 
app.get('/hello', (req, res) => {  /* Firstly used app.get('/hello',) 
   and also used app.get('/', (req, res) => { to get it showing on / route. */
   /* For a get function, first argument is a string for url followed by a second argument that is a 
   call back function with 2 arguments request and response */
   res.send('Hello!');
   /* Inside body of call back function we send back a string message on page */ 
})