// back-end/validateEnv.js
// Add chalk package for colouring invalid message  
import chalk from 'chalk';
import dotenv from 'dotenv';  // imports dotenv npm package (version 16.4.7)
// Explicitly specify the absolute path to .env

import { fileURLToPath } from 'url';
import path from 'path';
// Use zod to help with validation for Environment variables for string | undefined
import { z } from 'zod'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

const envSchema = z.object({
    DB_USERNAME: z.string().min(1, 'DB_USERNAME is required'),
    DB_PASSWORD: z.string().min(1, 'DB_PASSWORD is required'),
    //PORT: z.string().optional()
});

const parsedEnv = envSchema.safeParse(process.env);

if(!parsedEnv.success)  {
    //console.log('❌ Invalid environment variables:', parsedEnv.error.format());
    console.log(chalk.red.bold('❌ Invalid - environment variables missing or empty :')), 
    //Add console.dir for debugging an object's structure with full properties, including nested objects. 
    console.dir(parsedEnv.error.format(), { depth: null });
    //console.log(JSON.stringify(parsedEnv.error.format(), null, 2));

    process.exit(1);  // stop app if validation fails
}

export const env = parsedEnv.data;