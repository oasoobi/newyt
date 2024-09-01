import { headers } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: { params: { videoID: string } }) {
    const vid = params.videoID;
    const apiURL = "https://invidious.jing.rocks/vi/";
    const res = (await fetch(apiURL + vid + "/mqdefault.jpg"));
    const imageBuffer = await res.arrayBuffer();
    return new Response(imageBuffer, {
        status:200,
        headers: {
            "Content-Type": "image/jpg",
        }
    });
}