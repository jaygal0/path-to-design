import Link from "next/link";

export function LeftSidebar() {
    return (
        <div className="col-start-1 col-span-2 row-start-1 flex flex-col justify-end gap-3 text-sm pl-3">
            <div className="fixed bottom-5 flex flex-col justify-end h-screen gap-3 p-3">
                <Link href="/share">Share Your Story</Link>
                {/* <Link href="/contact">Contact</Link> */}
                <Link href="/privacy">Privacy</Link>
            </div>
        </div>
    )
}