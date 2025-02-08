import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-gray-200 bg-stone-950 p-4 font-sans shadow md:flex md:items-center md:justify-between md:p-6">
      <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{dayjs().year()}{" "}
        <span className="text-md font-sans">Path to Design</span>. All Rights
        Reserved.
      </div>
      <ul className="mt-3 flex flex-wrap items-center gap-10 font-sans text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
        <li>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  );
}
