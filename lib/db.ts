import {PrismaClient} from "@prisma/client"
// 全局作用域
declare global{
    // 类型为PrismaClient
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient();


