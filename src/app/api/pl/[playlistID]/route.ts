import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: { params: {playlistID: string}}) {
    const plid = params.playlistID;
    const apiURL = "https://invidious.jing.rocks/api/v1/playlists/";
    const res = await fetch(apiURL + plid + "?hl=ja");
    const data = await res.json();
    return NextResponse.json(data)
}