import Link from "next/link";

export function AdditionalLinks() {
  return (
    <div className="hidden text-sm md:inline">
      <div className="flex flex-col p-3 lg:fixed">
        <Link href="/share">Share Your Story</Link>
        {/* <Link href="/contact">Contact</Link> */}
        <Link href="/privacy">Privacy</Link>
      </div>
    </div>
  );
}
