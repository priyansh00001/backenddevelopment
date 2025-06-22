// lib/prisma.ts
import { PrismaClient } from './generated/prisma'

// const Prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;