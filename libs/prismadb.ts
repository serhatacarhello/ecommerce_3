import { PrismaClient } from "@prisma/client";

// Import the PrismaClient from the Prisma JS client library

declare global {
  var prisma: PrismaClient | undefined;  
}

// Declare a global variable named prisma that may be a PrismaClient or undefined

const prisma = globalThis.prisma || new PrismaClient();

// Check if there is already a client instance in the global scope
// If not, create a new PrismaClient instance and assign to constant client

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// If environment is not production, set global prisma variable 
// to the client instance to reuse it across the application

export default prisma;

// Export the client instance as the default export for importing