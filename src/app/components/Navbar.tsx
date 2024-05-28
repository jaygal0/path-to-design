import Link from "next/link";

export function Navbar() {
    return (
        <div className="z-50 fixed top-0 left-0 flex justify-between px-8 py-8 w-screen">
            <Link href="/">Designer Stories</Link>
            <div className="flex gap-7">
                <Link href="/about">About</Link>
                <Link href="blog">Blog</Link>
            </div>
        </div>
    )
}