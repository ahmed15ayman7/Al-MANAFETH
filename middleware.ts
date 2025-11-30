export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // حماية كل المسارات

    // "/",
    "/api/auth/:path*",
    "/_next/:path*",
    "/_next/static/:path*",
    "/_next/image/:path*",
    "/favicon.ico",
    // "/sitemap.xml",
    // "/robots.txt",
  ]
}