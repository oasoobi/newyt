import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const apiURL = "https://iv.ggtyler.dev/api/v1/search?region=JP&q=";

    const res = await fetch(apiURL + params.get("q") + "&page=" + params.get("p"));
    console.log(apiURL + params.get("q") + "&page=" + params.get("p") === null ? 1 : params.get("p"));
    const data = await res.json();
    return NextResponse.json(data)
}