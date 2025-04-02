import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    //return NextResponse.redirect(new URL("/", request.url))
/* 
    if(request.nextUrl.pathname === '/profile'){
        return NextResponse.rewrite(new URL("/hello", request.url))
    } */

    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme")?.value;

    if(!themePreference){
        response.cookies.set("theme", "dark")
    }

    response.headers.set("custom-header", "hello world")

    return response;
}

/* export const config = {
    matcher: "/profile"
} */