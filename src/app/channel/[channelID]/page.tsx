import { ChannelContents } from "@/components/channel/ChannelContents";
import { formatNumber } from "@/components/FormatNumber";

export default async function Home({ params }: { params: { channelID: string } }) {
  const channelID = params.channelID;

  const res = await fetch(`https://iv.nboeck.de/api/v1/channels/` + channelID + "?hl=ja");
  const data = await res.json()
  return (
    <>
    {
      data.error ? <main className="flex items-center justify-center w-screen h-screen"><p>読み込めません。500</p></main> :
        <main className="flex min-h-screen flex-col items-center pl-12 pr-12 mb-20">
          <div className="mt-[7rem] px-6 w-full">
            {
              data?.authorBanners && data?.authorBanners.length > 0 ? <img src={data?.authorBanners[0].url as string} alt="" className="mb-5 rounded-md pointer-events-none select-none" /> :
                <></>
            }
            <div className="flex items-start">
              <img className="rounded-full border pointer-events-none select-none" src={data?.authorThumbnails[3].url} width={150} height={150} alt=""/>
              <div className="ml-4">
                <h1 className="text-4xl font-bold">{data?.author}</h1>
                <p>チャンネル登録者数 {formatNumber(data?.subCount)}人</p>
                <div className="h-[6em] w-full overflow-hidden whitespace">{data?.description}</div>
              </div>
            </div>
          </div>
          <div className="min-w-full p-5">
            <ChannelContents channelID={channelID} />
          </div>
        </main>
    }
    </>
  );
}

