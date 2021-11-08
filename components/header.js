import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { HamburgerMenuIcon } from "@modulz/radix-icons";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-gray-50">
      <div className="flex flex-wrap items-center justify-between px-6 md:px-12 py-6 md:flex-no-wrap">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-lg underline font-display md:text-xl font-semibold text-gray-800">
              Nick Mayernik
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-black rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <HamburgerMenuIcon />
            <title>Menu</title>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "About", route: "/about" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-8" key={title}>
              <Link href={route}>
                <a className="block text-lg font-display font-medium underline text-gray-600">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
