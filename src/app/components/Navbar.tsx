import Link from "next/link";

export function Navbar() {
    return (
        <div className="flex justify-between px-8 py-4 w-screen bg-slate-400">
            <Link href="/">Designer Stories</Link>
            <div className="flex gap-7">
                <Link href="/about">About</Link>
                <Link href="/stories">Stories</Link>
                <Link href="/tools">Tools</Link>
                <Link href="blog">Blog</Link>
            </div>
        </div>
    )
}