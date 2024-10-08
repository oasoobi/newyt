import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: { params: {channelID: string}}) {
    const cid = params.channelID;
    const apiURL = "https://iv.nboeck.de/api/v1/channels/";

    const res = await fetch(apiURL + cid + "?hl=ja");
    const data = await res.json();
    return NextResponse.json(data)
}