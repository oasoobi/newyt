
import { Suspense } from "react";
import { SearchResult } from "@/components/SearchResults"

export default function Home() {
    return (
        <Suspense>
            <SearchResult/>
        </Suspense>
    );
}
