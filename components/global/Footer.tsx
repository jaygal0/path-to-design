export default function Footer() {
  const dayjs = require("dayjs");

  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full border-t-2 border-gray-200 bg-white p-4 font-sans shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-stone-950">
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {dayjs().year()}{" "}
        <span className="font-serif text-lg">Path to Design</span>. All Rights
        Reserved.
      </div>
      <ul className="mt-3 flex flex-wrap items-center gap-10 font-sans text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  );
}
