export default function Page() {
  return (
    <div className="flex flex-col">
      <h1 className="mb-20 mt-40 text-5xl font-bold">Share Your Story</h1>
      <p className="font-sans text-xl font-thin leading-relaxed">
        If you&apos;d like to share your journey to becoming a designer you can
        reach me at{" "}
        <a
          href="mailto:info@pathtodesign.com"
          className="underline hover:cursor-pointer"
        >
          info@pathtodesign.com.
        </a>
      </p>
    </div>
  );
}
