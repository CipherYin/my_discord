import { authMiddleware } from "@clerk/nextjs/server";


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


export default authMiddleware({
  // 不需要身份验证的路由
  publicRoutes: ["/api/uploadthing"]
})