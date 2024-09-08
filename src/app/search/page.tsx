
import { Suspense } from "react";
import { SearchResult } from "@/components/search/SearchResults"

export default function Home() {
    return (
        <Suspense>
            <SearchResult/>
        </Suspense>
    );
}
