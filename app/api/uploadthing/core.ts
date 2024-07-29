import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from '@clerk/nextjs/server'
import { useId } from "react";
const f = createUploadthing();
 
const handleAuth = ()=>{
    const userId = auth()
    if(!useId) throw new Error("Unauthorized");
    return {userId: useId}
}

 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB" ,maxFileCount: 1} })
        .middleware(()=>handleAuth())
        .onUploadComplete(()=>{}),
    messageFile: f(["image","pdf"])
        .middleware(()=>handleAuth())
        .onUploadComplete(()=>{})
} satisfies FileRouter;
//satisfies 是 TypeScript 4.9 引入的一项新特性，用于类型断言和类型检查。它允许你在定义对象或函数时，确保它符合指定的类型或接口，而不需要显式地声明其类型
 
export type OurFileRouter = typeof ourFileRouter;