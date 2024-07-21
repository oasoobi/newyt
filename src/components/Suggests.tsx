import * as React from "react"
import Link from "next/link"

export function Suggests({ suggests, isHidden }: { suggests: Array<string>, isHidden: Boolean}) {
    return (
        !isHidden && suggests.length > 0 && (
            <div className={"absolute w-full h-auto border rounded-lg z-10 bg-white"}>
                <ul>
                    {suggests.map((suggest: string, index: number) => (
                        <li key={index}>
                            <Link href={`/search?q=${suggest.replace(/ /g, '+')}`}>
                                <h1 className="text-md pl-5 hover:bg-gray-200 h-10 rounded-md flex items-center">{suggest}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    )
}
