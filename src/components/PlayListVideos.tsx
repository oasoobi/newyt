import { Video as VideoCard } from "@/components/playlist/video";
import { usePathname } from "next/navigation";

type Playlist = {
    "type": "playlist", // Constant

    "title": string,
    "playlistId": string,
    "playlistThumbnail": string,

    "author": string,
    "authorId": string,
    "authorUrl": string,
    "authorVerified": boolean,
    "videoCount": number, // Integer
    "videos": [
        {
            "title": string,
            "videoId": string,
            "lengthSeconds": number, // Integer
            "videoThumbnails": ThumbnailObject[]
        }
    ]
}

type ThumbnailObject = {
    "quality": string,
    "url": string,
    "width": string, // Integer
    "height": number // Integer
}

export async function PlayListVideos({params}:{params:{playlistID:string}}) {
    const playlistId = params.playlistID;
    const res = await fetch("https://iv.nboeck.de/api/v1/playlists/" + playlistId + "?hl=ja");
    const data = await res.json();

    return (
        <main className="p-6 lg:p-6">
            <h1 className="text-2xl text-center mb-10">{data?.title}</h1>
            <h1 className="text-xl mb-2">{data?.videoCount} 本の動画</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {data?.videos?.map((data:any,index:number) =>
                    <VideoCard video={data} key={data.videoId} lazy={index > 12}/>
                )}
            </div>
        </main>
    );
}
