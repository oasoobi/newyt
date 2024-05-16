import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: { params: {playlistID: string}}) {
    const plid = params.playlistID;
    const apiURL = "https://iv.ggtyler.dev/api/v1/playlists/";
    const res = await fetch(apiURL + plid + "?hl=ja");
    console.log(res.url)
    const data = await res.json();
    return NextResponse.json(data)
}