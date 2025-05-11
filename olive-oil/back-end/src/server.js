/* A Node js Framework Express module in quotes is imported from an express library. */
import express from 'express';
/*Semi colon ; used at end of a code statement are optional due to automatic semicolon insertion. 
   Best practice to put ; in yourself for improved readability and less errors as api may not always 
   get your end of statements for your code correct and it makes code easier to maintain and debug. */  

// Put this in db.js (Database Connection Module)
//import dotenv from 'dotenv';  // imports dotenv npm package (version 16.4.7)

//Use Node chalk package to show coloured warning symbols if needed
//import chalk from 'chalk';   // Now used in back-end/src/db.js

// Explicitly specify the absolute path to .env
//import { fileURLToPath } from 'url';
//import path from 'path';
//import { env } from '../validateEnv.js';   // Now used in back-end/src/db.js

//console.log('ENV Vars Loaded:', process.env);

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//dotenv.config({ path: path.resolve(__dirname, '.env') });
// Go up one level from /src to load .env
//dotenv.config({ path: path.resolve(__dirname, '../.env') });

//dotenv.config();    // Calls a config() method to load .env file
//dotenv .config({path: '../.env'});    // May need a path to .env file
//no need for path as dotenv.config(); gets path without needing to specify it
//dotenv.config({path: './back-end/.env'});

// Define username and password as a const variable
/*"process.env.db_username retrieves an environment variable in Node.js 
   and we assign it to a const variable (dbUser) to store the value safely for use within program. 
   The || 'default_user' part ensures a fallback value if the environment variable is missing."*/
//const dbUser = process.env.db_username || 'default_user'; 
//const dbPassword = process.env.db_password || 'default_password';
/*const dbUser = process.env.DB_USERNAME || 'default_user';
const dbPassword = process.env.DB_PASSWORD || 'default_password';*/

// Now use validated variables to assign to a const variable
//const dbUser = env.DB_USERNAME || 'default_user';
//const dbPassword = env.DB_PASSWORD || 'default_password';

//const dbUser = env.DB_USERNAME;       // Now in back-end/src/db.js
//const dbPassword = env.DB_PASSWORD;   // Now in back-end/src/db.js

// Check if credentials are missing
//if (!process.env.db_username || !process.env.db_password) {

//if (!dbUser || !dbPassword) {     // Now used in back-end/src/db.js
   // show yellow and bold unicode warning symbol, when no username and password is entered 
   //console.warn(chalk.yellow.bold('⚠️ Warning: Database credentials are missing!'));   
//}   // Now used in back-end/src/db.js

// Now use validated variables
//console.log('DB Username:', env.DB_USERNAME);  // Now used in back-end/src/db.js
//console.log('DB Password:', env.DB_PASSWORD);  // Now used in back-end/src/db.js

//Comment consoles to see if npm run dev dev reduces output
//console.log('Environment variables loaded:', process.env);
//console.log('Environment Variables:', process.env);
//Comment Environment Variables console to see if npm run dev dev reduces output
// Environment variables consoles gave extra detail, so I am not using them
//consoles only temporarily needed for checking that username and password are read 
//console.log('DB Username:', process.env.db_username);
//console.log('DB Password:', process.env.db_password);

//console.log('DB Username:', process.env.DB_USERNAME);
//console.log('DB Password:', process.env.DB_PASSWORD);

/*console.log('Loaded ENV:', {
   DB_USERNAME: process.env.DB_USERNAME,
   DB_PASSWORD: process.env.DB_PASSWORD,
});*/

/*const { DB_USERNAME, DB_PASSWORD } = process.env;
console.log('Loaded ENV:', { DB_USERNAME, DB_PASSWORD });*/
//console.log(process.env.db_username);
//console.log(process.env.db_password); 
// console below shows full back-end directory for my Vue project
//console.log('Current working directory:', process.cwd());  // Now used in back-end/src/db.js

// Put this in db.js (Database Connection Module)   
// Import MongoClient class from mongodb 4.17.2 npm package 
//import { MongoClient } from 'mongodb';   // youtube  // Now used in back-end/src/db.js 

// Using connectToDatabase function from db.js (Database Connection Module)
//import { connectToDatabase } from './db.js';
//console.log(connectToDatabase);
/* Do not need to use import connectToDatabase, because it is not called in api on its own 
   and is used with client in api. */
//import { client } from './db.js';
import { getDatabaseClient, listDatabases } from './db.js';


// import { cartItems, products } from './temp-olive_oil-data.js';
// Now we have to change import to allow for raw data for an added id 
import {cartItems as cartItemsRaw, products as productsRaw} from './temp-olive_oil-data.js'; 

// Two local variables that can make changes for added products 
let cartItems = cartItemsRaw;
let products = productsRaw;

// define url separately for MongoClient youtube  // This connection string is now in db.js file
 //const url = `mongodb+srv://<db_username>:<db_password>@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev` 
//const url = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev`;
// Now pass defined username and password as a const variable into url string
// Connection String below, now used in back-end/src/db.js
//const url = `mongodb+srv://${dbUser}:${dbPassword}@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev`;

// Create a new instance of MongoClient constructor class
// const client = new MongoClient(`mongodb+srv://<db_username>:<db_password>@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev`)
// It is better to have url passed as an argument into MongoClient constructor
//const client = new MongoClient(url);  // youtube This is now used in db.js file

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
// Comment original /hello endpoint below, as we will use products as an experiment in it below
//app.get('/hello', (req, res) => {    // Firstly used app.get('/hello',) 
   //and also used app.get('/', (req, res) => { to get it showing on / route.
   /* For a get function, first argument is a string for url followed by a second argument that is a 
   call back function with 2 arguments request and response */
   //res.send('Hello!');
   /* Inside body of call back function we send back a string message on page. */ 
//});

// Use /hello endpoint for testing MongoDB connection
app.get('/hello', async (req, res)  =>  {
   try {
      //await client.connect();   
      //console.log('Connected to MongoDB!');
      //const db = client.db('olive-oil-db');
      /*const dbAdmin = client.db().admin();
      const databases = await dbAdmin.listDatabases();
      const dbNames = databases.databases.map(db => db.name);*/
      //console.log('Database ready:', db.databaseName);

      //Utilize functions from database connection module db.js now
      const client = await getDatabaseClient();
      //const dbNames = await listDatabases();   // Need to use client with database operation function
      const dbNames = await listDatabases(client);

      // Restructure below code, so that a check for databases existing comes first
      // Step 1 - Check if any databases exist on server.
      if (dbNames.length === 0) {
            console.warn('No databases found on MongoDB Server Cluster.');
            throw new Error('No databases found on MongoDB server Cluster.');
      //}  else  {
            //console.log(`Successfully found ${dbNames.length} database(s) on server.`);
      }

      //Show number of databases found on server in console on command line.
      console.log(`Successfully found ${dbNames.length} database(s) on server.`);

      // Step 2 - Specify and check for required database.
      //Test with a temporary database
      //const requiredDatabase = 'important-db'; // Replace with database I am testing  
      const requiredDatabase = 'olive-oil-db';

      if (!dbNames.includes(requiredDatabase)) {
            console.warn(`Warning: Database "${requiredDatabase}' does not Exist, please create it.`);
            throw new Error(`Database "${requiredDatabase}" is missing.`)
      //}  else  {
         //console.log(`Database "${requiredDatabase}" exists and is ready to use.`);
      }   

      //Show database name that is ready to use in console on command line. 
      console.log(`Database "${requiredDatabase}" exists and is ready to use.`);

      //Add a console log to show database names in console of command line
      //console.log('available Databases:', dbNames);

      // Simulate a test for a non-existent database
      //const testDatabaseName = 'nonexistent-db';
      //const requiredDatabase = 'important-db';
      //const requiredDatabase = 'nonexistent-db';

      // Check if required database exists
      //if (!dbNames.includes(testDatabaseName)) {
      //if (!dbNames.includes(requiredDatabase)) {
         //throw new Error(`Database "${testDatabaseName}" does not exist.`);
         //I got Failed to connect to MongoDB: Database "nonexistent-db" does not exist.
         //in console of command line because of this throw error
         // Log a warning for missing databases instead of throwing
         //console.warn(`Warning: Database "${testDatabaseName}' does not Exist.`)

         /*console.warn(`Warning: Database "${requiredDatabase}" does not exist.`);
         throw new Error(`Database "${requiredDatabase}" is required but does not exist.`);
      }*/

      // Example: Checking if any databases exist
      // Handle case where no databases exist on server
      //if (dbNames.length === 0) {
         //Continue server operation without throwing
         //console.log('No databases found on server. Terminating server.');
         //Use throw error when no database exists
         //throw new Error('No databases found on server.');
      //}

      //res.send('Connected to MongoDB - Ready to Use Database Awesome') 
      //When connection works send a string template to show headings focusing on success
      //connecting to MongoDB and available databases with a list of them.
      res.send(`
         <h3>Connected to MongoDB - Ready to Use Database, Awesome</h3>
         <h4>Available Databases:</h4>
         <ul>
            ${dbNames.map(name => `<li>${name}</li>`).join('')}   
         </ul>
      `)
   } catch (error) {
      // MongoDB connection fails, so show string along with error message in console on command line
      console.error('Failed to connect to MongoDB:', error.message);
      //res.status(500).send('No MongoDB Connection - Check Internet connection, Database Name or Login')
      //When connection fails, use a 500 internal server error to send a string template that focuses
      //on why it fails and Add a link to login to MongoDB Atlas because connection has failed.  
      res.status(500).send(`
         <h3><Internal Server Error/h3>
         <h4>Connection to MongoDB Failed. Please Check :</h4>
         <ul>
            <li>Your Internet Connection</li>
            <li>Database Name</li>
            <li>MongoDB Atlas Login (Username and Password)</li>
         </ul>
         <p><a href="https://account.mongodb.com/account/login">Log into MongoDB Atlas</a>
            If you have not done already. 
         </p>
      `)
   }  // finally close database is used in dbMongoTest.js connection script test
      /*finally  {  
      await client.close();
   }*/
});
      //process.exit(1);
 /*};
});*/

//Another option for MongoDB Connection
/*app.get('/hello', async (res)  =>  {
     try {
        await client.connect()  // Allow MongoDB connection
        res.send('You have successfully connected to MongoDB!');
        } catch (error) {
        res.status(500).send('Failed to connect to MongoDB - Check Database Name or Login')
        console.error('Connection error:', error.message);  // Logs error details in back-end 
     }
  })
*/

// Change /hello endpoint to code for MongoDB connection with products as an experiment
// /hello endpoint uses to MongoDB code below with just database connection module for showing products
// async keyword is used here for an asynchronous function to return a promise.
// Promises help control completion of doing tasks that are not done at same (asynchronous).
//app.get('/hello', async (req, res) =>  { 
   //try {    //Establishes database connection and performs operations.
   // await client.connectToDatabase();    // Attempt to connect to database
   // This uses connectToDatabase function in db.js which returns a database with client.db('robw-mongo'); 
   //const db = await client.connectToDatabase();

   // An await keyword is used with async to pause execution of a task until other tasks are completed. 
   // A Node based driver client is used as an API tool to interact with database.
   // Here client is using a connect() method to wait for a connection to my MongoDB cluster   
   //await client.connect();  // youtube  Use client to allow MongoDB connection
   //const db = client.db('robw-mongo');   // youtube (Database User Name)

   //client is using a db method to select a database and assigning that to a variable (instance)
   //which can be used to interact with parts of database. 
   //const db = client.db('olive-oil-db');  // Use correct Database Name

   // Force an error for testing purposes.
   // Note: This makes code unreachable before catch, so it ignore that code to get error).
   //throw new Error('Forced error for testing');

   /*Using a products variable (as an instance) with an await keyword to access products collection 
     from a database, get all products using a find query and toArray method to show products in an 
     array format. await is javascript code that waits for each of these asynchronous tasks to complete 
     before running this code below. */
   //const products = await db.collection('products').find({}).toArray(); // Attempt to fetch products
   //Temporarily test a database that does not exist
   //const products = await db.collection('nonexistent').find({}).toArray();
   //if statement is using a length method to say if length of products array is equal to 0 
   //then there are no products, so an error occurs
   /*if (products.length === 0) {
      throw new Error('No products found');
   }*/
   // Force an error for testing purposes.
   // Note: This makes code unreachable before catch, so it ignore that code to get error).
   //throw new Error('Forced error for testing');

   //res.send(products);  // Send products as a response
   /* Inside body of call back function we send back products on a page. */ 
   /*}  catch (error)  {
      // Catch any errors that occurred during the try block
      res.status(500).send('Error fetching products'); // Send a 500 status code and error message }*/

   //}  catch(error)  {   // Handles any errors that occur during the database operations
         //console.log('Products fetching error', error.message);
         // Use console error for an error that starts with Products fetching error. 
         // Note: error.message is No Products found from throw new Error 
         //console.error('Products fetching error', error.message);  
         //console.error('An error occurred:', error.message);  // 
         //res.status(500).send('Failed to show products');
         // This in a 500 internal (localhost) server error that shows message in browser
   //}  finally {   // prevents potential memory leaks and ensures that resources are properly released.
         // Allow client API tool to close database when you finish or find an error
         /*await client.close();   
   }   
});*/

/* Endpoint for loading all products */
// Comment original /products endpoint below, as we will initially use products with MongoDB connection.
//app.get('/products', (req, res) => {
   // products data from import above, sent back to user client side from temp json data file in 
   // back end. 
   /*res.json(products);
}); */

// Now use MongoDB code in products api endpoint below. 
// Note: this was originally in /hello endpoint 
app.get('/products', async (req, res) =>  {
  try {
   //await client.connect();   // Now in a function in db.js
   //Utilize functions from database connection module db.js now
   const client = await getDatabaseClient();
   const db = client.db('olive-oil-db');

   //Test for Collection that does not exist or is empty within same if else statement

   // Get (retrieve) a list of all collections in database by fetching collections to show on 
   //command line console using async/await instead of .then().
   const collections = await db.listCollections().toArray();

   // Show collections of database in console of command line for above 
   console.log("Collections in database:", collections);

   //Use Map function to find a collection name from group of collections
   const collectionNames = collections.map(collection => collection.name);
   //or this can be written like this 
   /*const collectionNames = collections.map(collection)   {
      return collection.name;
   }*/

   //Check if any collections exist in database with if else statement.
   if (collections.length === 0) {
         console.warn('There is no "collection" yet, please create one.');
         throw new Error('No Collections found');
   }  else  {
         console.log(`Successfully found ${collections.length} collection(s) in database. 
         Please create content in one of collections you want to work with.`);
   }

   // Show collection names of database in console of command line.
   //Only works after initialization below if statement.
   console.log("Collections in database:", collectionNames);
   //console.log("Collections in database:", collections);

   // Get products from 'products' collection
   const products = collectionNames.includes('products') 
      ? await db.collection('products').find({}).toArray() 
      : [];  

   // Combined check for nonexistent or empty 'products' collection
   if (!collectionNames.includes('products') || products.length === 0) {
      //if (!collectionNames.includes('nonexistent') || products.length === 0) {   
         console.warn('Collection "products" is missing or empty.');
         throw new Error('No products available.');
   }   else  {
         console.log(`Successfully found ${products.length} product(s) in collection.`);
   }

   // May not need this to show in command line console as products shows on localhost
   console.log("Products in products collection", products);

   res.send(products);

   }  catch(error)  {
      // Error for command line console when cannot find products 
      console.error('Products fetching error', error.message);
      res.status(500).send('Failed to show products'); // Send a 500 status code and error message
   } 
});  

   /* Now refined code above as this code below does not test for a collection
      that does not exist. /*

   /*db.listCollections().toArray().then((collections) => {
      console.log("Collections in database:", collections);
   });*/
   //Fetch collections to show on command line console using async/await instead of .then() 
   //Now we retrieve (get) list of collections
   //const collections = await db.listCollections().toArray();
   //const collections = await db.listCollections('nonexistent').toArray();
   //console now handled in if else statement below.
   //console.log("Collections in database:", collections); 

   //Check if any collections exist in database.
   /*if (collections.length === 0) {
         console.warn('There is no "collection" yet, please create one.');
         throw new Error('No Collections found');
   }  else  {
         console.log(`Successfully found ${collections.length} collection(s) in database`);
   }

   console.log("Collections in database:", collections);  */

   //Retrieve (get) products from 'products' collection

   //const products = await db.collection('products').find({}).toArray();
   
   //Temporarily test a database that does not exist  (should be collection)
   //const products = await db.collection('nonexistent').find({}).toArray();
   //console.log("Products in products collection:", products);

   // Check if products collection is empty or not
   /*if (products.length === 0) {
         console.warn('Collection "products" exists but is empty.');
         throw new Error('No products found');
   }  else  {
         console.log(`Successfully found ${products.length} product(s) from collection.`);
   } */

   // May not need this as products shows on localhost
   //console.log("Products in products collection:", products);  

   /*res.send(products);

   }  catch(error)  {  */
      //console.log('Products fetching error', error.message); // console to show message in command line
      // Should use console.error with an error rather than console.log
      //console.error('Products fetching error', error.message);
      //Use same error message that I used with hello endpoint when it handled products
      //res.status(500).send('Failed to show products'); // Send a 500 status code and error message
      //res.status(500).send('Error fetching products'); // Send a 500 status code and error message
   /*}
});   */

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