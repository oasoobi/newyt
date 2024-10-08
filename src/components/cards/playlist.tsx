import * as React from "react"
import Link from "next/link"
import Image from "next/image";
type Playlist = {
    type: string;
    title: string;
    playlistId: string;
    playlistThumbnail: string;
    author: string;
    authorId: string;
    authorUrl: string;
    authorVerified: boolean;
    videoCount: number;
    videos: {
        title: string;
        videoId: string;
        lengthSeconds: number;
        videoThumbnails: {
            quality: string;
            url: string;
            width: number;
            height: number;
        }[];
    }[];
};



export function Playlist({ playlist }: { playlist: Playlist }) {
    return (
        <Link href={"/playlist/" + playlist.playlistId} className="border rounded-md hover:bg-gray-100 w-full h-full flex flex-col p-[3%] transition-colors">
            <img src={playlist.playlistThumbnail} alt="" className="rounded-lg w-full pointer-events-none select-none" />
            <h1 className="text-lg">{playlist.title}</h1>
            <h1>{playlist.videoCount} 本の動画</h1>
            <Link href={playlist.authorUrl} className="flex items-center mt-4">
                <h1 className="mr-1 text-lg">{playlist.author}</h1>
                {playlist.authorVerified ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="m9.585.52.929.68c.153.112.331.186.518.215l1.138.175a2.678 2.678 0 0 1 2.24 2.24l.174 1.139c.029.187.103.365.215.518l.68.928a2.677 2.677 0 0 1 0 3.17l-.68.928a1.174 1.174 0 0 0-.215.518l-.175 1.138a2.678 2.678 0 0 1-2.241 2.241l-1.138.175a1.17 1.17 0 0 0-.518.215l-.928.68a2.677 2.677 0 0 1-3.17 0l-.928-.68a1.174 1.174 0 0 0-.518-.215L3.83 14.41a2.678 2.678 0 0 1-2.24-2.24l-.175-1.138a1.17 1.17 0 0 0-.215-.518l-.68-.928a2.677 2.677 0 0 1 0-3.17l.68-.928c.112-.153.186-.331.215-.518l.175-1.14a2.678 2.678 0 0 1 2.24-2.24l1.139-.175c.187-.029.365-.103.518-.215l.928-.68a2.677 2.677 0 0 1 3.17 0ZM7.303 1.728l-.927.68a2.67 2.67 0 0 1-1.18.489l-1.137.174a1.179 1.179 0 0 0-.987.987l-.174 1.136a2.677 2.677 0 0 1-.489 1.18l-.68.928a1.18 1.18 0 0 0 0 1.394l.68.927c.256.348.424.753.489 1.18l.174 1.137c.078.509.478.909.987.987l1.136.174a2.67 2.67 0 0 1 1.18.489l.928.68c.414.305.979.305 1.394 0l.927-.68a2.67 2.67 0 0 1 1.18-.489l1.137-.174a1.18 1.18 0 0 0 .987-.987l.174-1.136a2.67 2.67 0 0 1 .489-1.18l.68-.928a1.176 1.176 0 0 0 0-1.394l-.68-.927a2.686 2.686 0 0 1-.489-1.18l-.174-1.137a1.179 1.179 0 0 0-.987-.987l-1.136-.174a2.677 2.677 0 0 1-1.18-.489l-.928-.68a1.176 1.176 0 0 0-1.394 0ZM11.28 6.78l-3.75 3.75a.75.75 0 0 1-1.06 0L4.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L7 8.94l3.22-3.22a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg> : ""}
            </Link>
        </Link>
    )
}