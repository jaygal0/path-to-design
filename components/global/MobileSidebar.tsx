import Link from "next/link";

export function MobileSidebar({ state }: any) {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-5/6 flex-col justify-between border-r-2 border-white bg-stone-950 pb-8">
      <svg
        className="absolute right-4 top-4"
        onClick={state}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
          />
        </g>
      </svg>
      <div className="flex flex-col gap-8 p-7 text-4xl">
        <Link href="/" onClick={state}>
          Home
        </Link>
        <Link href="/about" onClick={state}>
          About
        </Link>
        <Link href="/tools" onClick={state}>
          Tools
        </Link>
        <Link href="/blog" onClick={state}>
          Blog
        </Link>
        <Link href="/privacy" onClick={state}>
          Privacy
        </Link>
        <Link href="/share" onClick={state}>
          Share Your Story
        </Link>
      </div>

      {/* FORM */}

      {/* <div className="w-full px-6 font-sans">
        <h4 className="mb-2 text-lg font-normal">
          Stay inspired and discover the paths of more designers.
        </h4>
        <form
          className="flex flex-col"
          action="https://pathtodesign.us17.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="e41d9cf2ed34317e99e5891b9" />
          <input type="hidden" name="id" value="9437e60fa0" />
          <input
            className="mb-2 border-b-2 border-black p-2 text-stone-950"
            type="email"
            id="MERGE0"
            name="MERGE0"
            placeholder="name@email.com"
          />
          <button
            className="btn-gradient mt-2 cursor-pointer rounded-sm p-2 text-stone-950 hover:bg-slate-300"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div> */}
    </div>
  );
}
