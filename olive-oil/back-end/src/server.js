/* A a Node js Framework Express module in quotes is imported from an express library. */
import express from 'express';
/*Semi colon ; used at end of a code statement are optional due to automatic semicolon insertion. 
   Best practice to put ; in yourself for improved readability and less errors as asi may not always 
   get your end of statements for your code correct and it makes code easier to maintain and debug. */

// import { cartItems, products } from './temp-olive_oil-data.js';
// Now we have to change import to allow for raw data for an added id 
import {cartItems as cartItemsRaw, products as productsRaw} from './temp-olive_oil-data.js'; 

// Two local variables that can make changes for added products 
let cartItems = cartItemsRaw;
let products = productsRaw;

/* Code below creates an instance of an express application by calling an express function. 
   A const is used to declare a constant and it is called this because it is an app variable that 
   cannot be reassigned to something else (usually a varable) later in code.   
   Using a constant to create an app object can have its properties (or contents) such as app.get
   changed. */
const app = express();

// Define json for body in Postman and const productId = req.body.id in app.post('/cart' below  
app.use(express.json());

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
   /* Inside body of call back function we send back a string message on page. */ 
})

/* Endpoint for loading all products */
app.get('/products', (req, res) => {
   // products data from import above, sent back to user client side from temp json data file in 
   // back end. 
   res.json(products);
});

// For populating cartItems use a helper function to avoid repetitive code to endpoints.
// Helper function takes ids for products as an argument and populates those products.
function populateCartIds(ids) {
   // Use original populatedCart line from load cart endpoint below and change it.
   // const populatedCart = cartItems.map(id => products.find(product => product.id === id));
   return ids.map(id => products.find(product => product.id === id));
} 

/* Endpoint for loading a users current shopping cart. */
app.get('/cart', (req,res) => {
   // Populate each of cartItems ids with product that it represents 
   // Use JavaScript built in map function to map each id to its corresponding product.
   // In map function, id is an argument that is matched with find function.
   // const populatedCart = cartItems.map(id => products.find(product => product.id === id)); 
   // To avoid repeating this logic in all of our cart endpoints, we can use helper function
   // for const, by passing ids as an argument with cartItems.
   const populatedCart = populateCartIds(cartItems); 
   // With this Updated, now send populatedCart back to user on client side
   res.json(populatedCart);
   // cartItems data from import above, sent back to user client side from temp json data file in 
   // back end.
   // res.json(cartItems); // use populatedCart above now
});

/* Endpoint for loading individual products by Id Used for Product detail page. */
app.get('/products/:productId', (req, res) => {
   // res.json('hello again!');
   // Get value of an id from this endpoint. 
   // Use a params property with request argument to get productId value as a const variable for a
   // url path. 
   const productId = req.params.productId;
   // find product from productId URL parameter using a find() method. 
   // Using same find method from earlier on front end when finding a matching product for an id.
   const product = products.find(product => product.id === productId === id);
   // find() method is finding a product whose id is strictly equal to productId in url parameter. 
   res.json(product);    
   // send a product data back to user client side from temp json data file in back end.   
});

// Endpoint for Adding Item to user Cart.
app.post('/cart', (req, res) => {
   const productId = req.body.id;
   // Once we have product id from body, we do not need to find corresponding product 
   // const product = products.find(product => product.id === productId); 
   // We can push productId onto cartItems array, since it is an array of ids instead
   cartItems.push(productId);  
   // cartItems.push(product); // now use productId above
   // For populating cartItems use a helper function to avoid repetitive code to endpoints.
   // Helper function takes ids for products as an argument and populates those products.
   const populatedCart = populateCartIds(cartItems);
   // With this Updated, now send populatedCart back to user on client side
   res.json(populatedCart);
   // res.json(cartItems); // use populatedCart above now
}); 

// Endpoint for removing (delete) Item from user Cart.
app.delete('/cart/:productId', (req,res) => {
   const productId = req.params.productId;
   // cartItems = cartItems. filter(product => product.id !== productId);
   // Remove corresponding id that was part of url parameter and now use this below
   cartItems = cartItems.filter(id => id !== productId);
   // For populating cartItems use a helper function to avoid repetitive code to endpoints.
   // Helper function takes ids for products as an argument and populates those products.
   const populatedCart = populateCartIds(cartItems);
   // With this Updated, now send populatedCart back to user on client side
   res.json(populatedCart);
   // res.json(cartItems); // use populatedCart above now
});