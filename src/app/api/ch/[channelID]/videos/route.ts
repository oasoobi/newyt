import { NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, {params}: { params: {channelID: string}}) {
    const cid = params.channelID;
    const continuation = req.nextUrl.searchParams.get("continuation");
    const apiURL = "https://invidious.jing.rocks/api/v1/channels/";

    const res = await fetch(apiURL + cid + "/videos?hl=ja" + continuation);
    const data = await res.json();
    return NextResponse.json(data)
}