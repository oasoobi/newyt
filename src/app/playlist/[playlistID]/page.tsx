import { PlayListVideos } from "@/components/PlayListVideos";
import Image from "next/image";
import { Video as VideoCard } from "@/components/playlist/video";

export default async function Home({params}: {params:{playlistID:string}}) {
  const playlistId = params.playlistID;
  const res = await fetch("https://iv.nboeck.de/api/v1/playlists/" + playlistId + "?hl=ja");
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <main className="p-6 lg:p-6">
            <h1 className="text-2xl text-center mb-10">{data?.title}</h1>
            <h1 className="text-xl mb-2">{data?.videoCount} 本の動画</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {data?.videos?.map((data:any,index:number) =>
                    <VideoCard video={data} key={data.videoId} lazy={index > 12}/>
                )}
            </div>
        </main>
    </main>
  );
}
