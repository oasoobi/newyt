import { Video as VideoCard } from "@/components/playlist/video";

export default async function Home({ params }: { params: { playlistID: string } }) {
  const playlistId = params.playlistID;
  const res = await fetch("https://inv.nadeko.net/api/v1/playlists/" + playlistId + "?hl=ja");
  const data = await res.json();
  return (
    <>
      {
        data.error ?
          <main className="flex items-center justify-center w-screen h-screen"><p>読み込めません。500</p></main> :
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="p-6 lg:p-6">
              <h1 className="text-2xl text-center mb-10">{data?.title}</h1>
              <h1 className="text-xl mb-2">{data?.videoCount} 本の動画</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {data?.videos?.map((data: any, index: number) =>
                  <VideoCard video={data} key={data.videoId} lazy={index > 12} />
                )}
              </div>
            </div>
          </main>
      }
    </>

  );
}
