import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  
  '/meet',
  '/meet/upcoming',
  '/meet/previous',
  '/meet/personal-room',
  '/meet/recordings',
  '/meet/meeting(.*)'
])

export default clerkMiddleware((auth, req) => {
  if(protectedRoutes(req)) auth().protect();
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)','/','/(api|trpc)(.*)']
};

export const publicRoutes = createRouteMatcher([
  
  '/',
  'stream'
])