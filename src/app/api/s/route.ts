import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const apiURL = "https://iv.nboeck.de/api/v1/search?hl=ja&region=JP&q=";
    const query = params.get("q");
    const page = params.get("p") === null ? 1 : params.get("p");
    const res = await fetch(apiURL + query + "&page=" + page);
    const data = await res.json();
    return NextResponse.json(data)
}