import { Search } from "@/components/search/Search";
import Link from "next/link";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <Link href={"/"} className="text-2xl font-bold left mb-10 mt-20">
        Nextyt
      </Link>
      <Suspense>
        <Search />
      </Suspense>
    </main>
  );
}
