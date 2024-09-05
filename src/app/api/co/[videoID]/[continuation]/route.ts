import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: { params: {videoID: string, continuation: string}}) {
    const vid = params.videoID;
    const continuation = params.continuation;
    const apiURL = "https://iv.nboeck.de/api/v1/comments/";
    const res = await fetch(apiURL + vid + `?hl=ja&thin_mode=false&continuation=${continuation}&action=action_get_comment_replies`);
    const data = await res.json();
    return NextResponse.json(data)
}