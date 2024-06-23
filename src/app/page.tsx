import { Search } from "@/components/Search";
import Image from "next/image";
import as from "react"
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={"/"} className="text-2xl font-bold left mb-10 mt-20">SimpleTube v2</Link>
      <Search/>
    </main>
  );
}
