import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: { params: {videoID: string}}) {
    const vid = params.videoID;
    const apiURL = "https://invidious.jing.rocks/api/v1/videos/";

    const res = await fetch(apiURL + vid + "?hl=ja&region=jp");
    const data = await res.json();
    return NextResponse.json(data)
}
