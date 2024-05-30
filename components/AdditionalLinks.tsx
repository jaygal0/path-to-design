import Link from "next/link";

export function AdditionalLinks() {
  return (
    <div className="fixed bottom-4 left-4 hidden text-sm md:block">
      <div className="flex flex-col gap-3">
        <Link href="/share">Share Your Story</Link>
        {/* <Link href="/contact">Contact</Link> */}
        <Link href="/privacy">Privacy</Link>
      </div>
    </div>
  );
}
