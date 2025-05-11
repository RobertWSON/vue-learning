// This dbMongoTest.js (Connection Script Test) is used to test Database Connection

//import { client } from './db.js';  
// Now use functions from db.js database connection module instead of client
import { getDatabaseClient, listDatabases, closeClient } from './db.js';

// This connection script test is using code below with functions from db.js
// database connection module.
async function testConnection()  {
    try {
        const client = await getDatabaseClient();
        const dbNames = await listDatabases(client);

        // Restructure below code, so that a check for databases existing comes first
        // Step 1 - Check if any databases exist on server.
        /*if (dbNames.length === 0) {
                console.warn('No databases found on MongoDB Server Cluster.');
                throw new Error('No databases found on MongoDB server Cluster.');
        }  else  {
            console.log(`Successfully found ${dbNames.length} database(s) on server.`);
        }*/

        // Step 2 - Specify and check for required database.
        //Test with a temporary database
        //const requiredDatabase = 'important-db'; // Replace with database I am testing  
        /*const requiredDatabase = 'olive-oil-db';

        if (!dbNames.includes(requiredDatabase)) {
                console.warn(`Warning: Database "${requiredDatabase}' does not Exist, please create it.`);
                throw new Error(`Database "${requiredDatabase}" is missing.`)
        }  else  {
                console.log(`Database "${requiredDatabase}" exists and is ready to use.`);
        }*/

        // Step 3 - Use a console log to work with a forEach method for showing database list in console
        console.log('Available Databases:');
        //dbNames.foreach(db  => console.log(` - ${db}`));   // change to forEach camel case
        dbNames.forEach(db  => console.log(` - ${db}`));
            
    }   catch(error)    {
            console.error('Connection Test Failed', error.message);
    }   finally {
            await closeClient();
    }
}

testConnection();


// This connection script test is only using code below with const client from db.js
// database connection module. 
/*async function testConnection() {
    try {*/
        //console.log('Attempting to connect to MongoDB...');   Use Cluster in console below
        /*console.log('Attempting to connect to MongoDB Cluster');
        await client.connect();// Attempt to connect*/
        //console.log('Successfully connected to MongoDB!');  Use Cluster in console below
        //console.log('Successfully connected to MongoDB Cluster')

        // Optionally list databases for verification
        /*const dbAdmin = client.db().admin();
        const databases = await dbAdmin.listDatabases();
        console.log('Databases:');
        databases.databases.forEach(db => console.log(` - ${db.name}`));
    }   catch(error)   {
        console.error('Database Connection Failed:', error.message);
    }   finally {
        await client.close();*/ // Ensure connection is closed
        /*console.log('MongoDB connection closed.');
    }
}

testConnection();*/


/* This was using connectToDatabase function, but need to use client.connect() above
   because I am following youtube video that uses that.
// This imports connecToDatabase function and client variable, so that it can be used.
/*import { connectToDatabase, client }  from './db.js';

async function testConnection() {
    try {
        const db = await connectToDatabase();*/ // Try connecting to database
        /*const databases = await db.admin().listDatabases();
        console.log('Databases:');
        databases.databases.forEach(db => console.log(` - ${db.name}`));
    }   catch   (error)    {   
        console.error("Database Connection Failed:", error);
    }   finally {
        await client.close();
    }
}

testConnection();*/