import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams.toString().replace("q=", "");
    const apiURL = "https://www.google.com/complete/search?hl=ja&output=toolbar&ie=utf-8&oe=utf-8&client=firefox&ds=yt&q=";
    const res = await fetch(apiURL + params);
    const suggests = await res.json();
    return NextResponse.json(suggests[1]);
}