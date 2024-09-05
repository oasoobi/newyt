import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest, {params}: { params: {channelID: string}}) {
    const cid = params.channelID;
    const apiURL = "https://iv.nboeck.de/api/v1/channels/";
    const continuation = req.nextUrl.searchParams.get("continuation");

    const res = await fetch(apiURL + cid + "/streams?hl=ja" + (continuation !== null ? `&continuation=${continuation}` : ""));
    const data = await res.json();
    return NextResponse.json(data)
}