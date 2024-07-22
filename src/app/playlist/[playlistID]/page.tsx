import { PlayListVideos } from "@/components/PlayListVideos";
import Image from "next/image";
import as from "react"
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <PlayListVideos/>
    </main>
  );
}
