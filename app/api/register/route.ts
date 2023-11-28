import bcrypt from "bcrypt";
// singIn singOut process

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { name, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, hashedPassword },
  });

  return NextResponse.json(user);
};

// In summary, this serverless function is designed to handle a POST request containing user registration data. It hashes the user's password using bcrypt, creates a new user record in the database using Prisma, and then responds with the created user object in JSON format.