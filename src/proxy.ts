// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { clerkMiddleware } from '@clerk/nextjs/server';

// const isPublicRoute = createRouteMatcher([
//     '/sign-in(.*)',
//     'sign-up(.*)',
// ])

// export default clerkMiddleware(async (auth, req) => {
// if (!isPublicRoute(req)) {
//     await auth.protect()
// }
// })

export default clerkMiddleware()

export const config = {
    mather: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

        '/(api|trpc)(.*)',
    ],
}