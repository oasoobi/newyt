import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: { params: {videoID: string}}) {
    const vid = params.videoID;
    const apiURL = "https://inv.nadeko.net/api/v1/comments/";
    const res = await fetch(apiURL + vid + "?hl=ja");
    const data = await res.json();
    return NextResponse.json(data)
}