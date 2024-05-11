import Link from "next/link";

export function LeftSidebar() {
    return (
        <div className="col-start-1 col-span-2 flex flex-col fixed justify-end h-screen pl-4 pb-4 gap-3 text-sm">
            <Link href="/share">Share Your Story</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
        </div>
    )
}