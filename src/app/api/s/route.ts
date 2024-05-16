import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const apiURL = "https://invidious.fdn.fr/api/v1/search?hl=ja&q=";
    const query = params.get("q");
    const page = params.get("p") === null ? 1 : params.get("p");
    const res = await fetch(apiURL + query + "&page=" + page);
    const data = await res.json();
    console.log(res.url);
    return NextResponse.json(data)
}