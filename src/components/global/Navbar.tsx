"use client";

import { mainCTA, menu, pathToDesign } from "@/config/navigation";
import Link from "next/link";
import * as React from "react";
import { Button } from "./Button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 z-40 flex w-screen justify-between border-b-2 bg-stone-950 p-3 ">
      {/* MOBILE MENU  */}

      <div
        className={`absolute ${!showMobileMenu ? "left-[-100%]" : "left-0"} top-0 flex h-screen w-full flex-col justify-between border-r-2 border-white bg-stone-950 p-4 transition-all`}
      >
        {/* CLOSE BUTTON */}

        <svg
          className="absolute right-4 top-4"
          onClick={toggleMobileMenu}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0003 27.3346C7.71499 27.3346 4.57233 27.3346 2.61899 25.3813C0.666992 23.4306 0.666992 20.2866 0.666992 14.0013C0.666992 7.71597 0.666992 4.5733 2.61899 2.61997C4.57366 0.667969 7.71499 0.667969 14.0003 0.667969C20.2857 0.667969 23.4283 0.667969 25.3803 2.61997C27.3337 4.57464 27.3337 7.71597 27.3337 14.0013C27.3337 20.2866 27.3337 23.4293 25.3803 25.3813C23.4297 27.3346 20.2857 27.3346 14.0003 27.3346ZM9.96033 9.9613C10.1478 9.77403 10.402 9.66885 10.667 9.66885C10.932 9.66885 11.1862 9.77403 11.3737 9.9613L14.0003 12.588L16.627 9.9613C16.8166 9.78466 17.0673 9.6885 17.3264 9.69307C17.5854 9.69764 17.8326 9.80259 18.0158 9.98581C18.199 10.169 18.304 10.4162 18.3086 10.6753C18.3131 10.9343 18.217 11.1851 18.0403 11.3746L15.4137 14.0013L18.0403 16.628C18.1386 16.7195 18.2174 16.8299 18.272 16.9526C18.3267 17.0752 18.3561 17.2077 18.3584 17.3419C18.3608 17.4762 18.3361 17.6096 18.2858 17.7341C18.2355 17.8586 18.1607 17.9717 18.0657 18.0667C17.9708 18.1616 17.8576 18.2365 17.7331 18.2868C17.6086 18.3371 17.4752 18.3618 17.341 18.3594C17.2067 18.3571 17.0743 18.3277 16.9516 18.273C16.8289 18.2184 16.7185 18.1395 16.627 18.0413L14.0003 15.4146L11.3737 18.0413C11.2821 18.1395 11.1717 18.2184 11.049 18.273C10.9264 18.3277 10.794 18.3571 10.6597 18.3594C10.5254 18.3618 10.392 18.3371 10.2675 18.2868C10.143 18.2365 10.0299 18.1616 9.93494 18.0667C9.83998 17.9717 9.76512 17.8586 9.71483 17.7341C9.66453 17.6096 9.63983 17.4762 9.6422 17.3419C9.64457 17.2077 9.67396 17.0752 9.72862 16.9526C9.78327 16.8299 9.86208 16.7195 9.96033 16.628L12.587 14.0013L9.96033 11.3746C9.77306 11.1871 9.66787 10.933 9.66787 10.668C9.66787 10.403 9.77306 10.1488 9.96033 9.9613Z"
            fill="white"
          />
        </svg>

        <div className="flex h-full flex-col justify-between pb-8">
          <Link
            className="text-gradient text-xl font-bold"
            href={pathToDesign.href}
            onClick={toggleMobileMenu}
          >
            {pathToDesign.title}
          </Link>

          <div className="flex h-min flex-col justify-end gap-10 text-4xl">
            {menu.map((menu, index) => (
              <Link key={index} href={menu.href} onClick={toggleMobileMenu}>
                {menu.title}
              </Link>
            ))}
            <Link
              href={mainCTA.href}
              className="btn-gradient w-fit rounded-md p-1 px-4 text-stone-950"
              onClick={toggleMobileMenu}
            >
              {mainCTA.title}
            </Link>
          </div>
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

      {/* DESKTOP NAV */}

      <Link
        className="text-gradient text-xl font-bold"
        href={pathToDesign.href}
      >
        {pathToDesign.title}
      </Link>

      {/* HAMBURGER ICON */}

      {!showMobileMenu && (
        <svg
          onClick={toggleMobileMenu}
          className="md:hidden"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.61899 25.3826C4.57366 27.3346 7.71499 27.3346 14.0003 27.3346C20.2857 27.3346 23.4283 27.3346 25.3803 25.3813C27.3337 23.4306 27.3337 20.2866 27.3337 14.0013C27.3337 7.71597 27.3337 4.5733 25.3803 2.61997C23.4297 0.667969 20.2857 0.667969 14.0003 0.667969C7.71499 0.667969 4.57233 0.667969 2.61899 2.61997C0.666992 4.57464 0.666992 7.71597 0.666992 14.0013C0.666992 20.2866 0.666992 23.4306 2.61899 25.3826ZM23.0003 19.3346C23.0003 19.5999 22.895 19.8542 22.7074 20.0417C22.5199 20.2293 22.2655 20.3346 22.0003 20.3346H6.00033C5.73511 20.3346 5.48075 20.2293 5.29322 20.0417C5.10568 19.8542 5.00033 19.5999 5.00033 19.3346C5.00033 19.0694 5.10568 18.8151 5.29322 18.6275C5.48075 18.44 5.73511 18.3346 6.00033 18.3346H22.0003C22.2655 18.3346 22.5199 18.44 22.7074 18.6275C22.895 18.8151 23.0003 19.0694 23.0003 19.3346ZM22.0003 15.0013C22.2655 15.0013 22.5199 14.8959 22.7074 14.7084C22.895 14.5209 23.0003 14.2665 23.0003 14.0013C23.0003 13.7361 22.895 13.4817 22.7074 13.2942C22.5199 13.1067 22.2655 13.0013 22.0003 13.0013H6.00033C5.73511 13.0013 5.48075 13.1067 5.29322 13.2942C5.10568 13.4817 5.00033 13.7361 5.00033 14.0013C5.00033 14.2665 5.10568 14.5209 5.29322 14.7084C5.48075 14.8959 5.73511 15.0013 6.00033 15.0013H22.0003ZM23.0003 8.66797C23.0003 8.93318 22.895 9.18754 22.7074 9.37507C22.5199 9.56261 22.2655 9.66797 22.0003 9.66797H6.00033C5.73511 9.66797 5.48075 9.56261 5.29322 9.37507C5.10568 9.18754 5.00033 8.93318 5.00033 8.66797C5.00033 8.40275 5.10568 8.1484 5.29322 7.96086C5.48075 7.77333 5.73511 7.66797 6.00033 7.66797H22.0003C22.2655 7.66797 22.5199 7.77333 22.7074 7.96086C22.895 8.1484 23.0003 8.40275 23.0003 8.66797Z"
            fill="white"
          />
        </svg>
      )}
      <div className="hidden items-center gap-12 pr-4 font-sans md:flex">
        {menu.map((menu, index) => (
          <Link
            key={index}
            href={menu.href}
            className={`${pathname === menu.href ? "text-gradient" : "text-white"}`}
          >
            {menu.title}
          </Link>
        ))}
        <Button label={mainCTA.title} url={mainCTA.href} />
      </div>
    </nav>
  );
}
