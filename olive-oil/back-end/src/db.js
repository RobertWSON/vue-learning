// This db.js (Database Connection Module) now handles MongoClient with Connection String
// Check if this db.js file is loading
console.log("db.js loaded");
//Use Node chalk package to show coloured warning symbols if needed
import chalk from 'chalk';   
//env is for Validation of Environment variables 
import { env } from '../validateEnv.js';

// Import MongoClient class from mongodb 4.17.2 npm package 
import { MongoClient } from 'mongodb';

// Now use dotenv in back-end/validateEnv.js 
//import { env } from '../validateEnv.js';
//import dotenv from 'dotenv';  // imports dotenv npm package (version 16.4.7)
//dotenv config now use in validateEnv.js 
//dotenv.config();    // Calls a config() method to load .env file

// Now use validated variables to assign to a const variable
const dbUser = env.DB_USERNAME;       
const dbPassword = env.DB_PASSWORD;

if (!dbUser || !dbPassword) {     // Now in back-end/src/db.js
   // show yellow and bold unicode warning symbol, when no username and password is entered 
   console.warn(chalk.yellow.bold('⚠️ Warning: Database credentials are missing!'));   
}

//console.log(process.env.db_username);
//console.log(process.env.db_password);

// Now use validated variables
//console.log('DB Username:', env.DB_USERNAME);
//console.log('DB Password:', env.DB_PASSWORD);
// console below shows full back-end directory for my Vue project
console.log('Current working directory:', process.cwd());

// define url separately for MongoClient
//const url = `mongodb+srv://<db_username>:<db_password>@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev`
//const url = `mongodb+srv://${process.env.db_username}:${process.env.db_password}@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev`;
// Now use const variables in MongoDB connection string to pass in Environment Variables
const url = `mongodb+srv://${dbUser}:${dbPassword}@olive-oil-data-dev.kw0yq.mongodb.net/?retryWrites=true&w=majority&appName=Olive-Oil-Data-Dev`;

/* Create a new instance of MongoClient constructor class where a url is passed as an argument into it.
   Export this client variable, so that it can be used in server.js file. */
export const client = new MongoClient(url);


//Function to connect to MongoDB Cluster and return client instance.
export async function getDatabaseClient() {
   try {
   await client.connect();
   console.log(chalk.blue.bold('✔️ Connected to MongoDB'));
   return client;
   } catch (error) {
      console.error(chalk.red.bold(' ❌ Failed to connect to MongoDB:', error.message));
      throw error;
   }
}

//Function to list all available databases.
export async function listDatabases(client)  {
   try   {
   const dbAdmin = client.db().admin();
   const databases = await dbAdmin.listDatabases();
   return databases.databases.map(db => db.name);
   }  catch(error)   {
         console.error(chalk.red.bold('❌ Failed to list databases:', error.message));
         throw error;
   }
}

//Function to close MongoDB client.
export async function closeClient() {
   try   {
         await client.close();
         console.log(chalk.blue.bold('✔️ MongoDB connection closed'));
   }  catch(error)   {
         console.error(chalk.red.bold('❌ Failed to close MongoDB connection:', error.message));

   }
}


// Do not need connectToDatabase() function because I am using client.connect()
/* Connect asynchronous JavaScript function that connects to Database.
   Export this function, so that it can be used in server.js file. */
//export async function connectToDatabase() {
   //if (!client.isConnected)   {   // Prevents multiple reconnections
    //await client.connect();
    //console.log('Connected to MongoDB');  // Displays this when running back-end server
   //}
    //return client.db('robw-mongo');    // My database username
    //return client.db('olive-oil-db');  // Use correct Database Name
//}