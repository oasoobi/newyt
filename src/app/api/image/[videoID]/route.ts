import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: { params: { videoID: string } }) {
    const vid = params.videoID;
    const apiURL = "https://iv.ggtyler.dev/api/vi/";
    const res = (await fetch(apiURL + vid + "/mqdefault"));
    const data = await res.arrayBuffer();
    const base64Image = Buffer.from(data).toString("base64");
    return NextResponse.json({ base64Image });
}