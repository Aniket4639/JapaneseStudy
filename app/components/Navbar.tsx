"use client";
import { GraduationCap, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { routes } from "../navigation/routes";

export default function Navbar() {
  const [isDrawerIconOpen, setIsDrawerIconOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between bg-white dark:bg-white sm:items-center px-2 md:px-4 gap-1 py-4 md:py-3">
        <Link href={routes.home} className="flex flex-row items-center gap-2">
          <div className="bg-blue-600 p-1 rounded-md">
            <GraduationCap className="text-white w-10 h-10" />
          </div>
          <text className="text-black text-2xl font-bold">Japanese Study</text>
        </Link>
        <div className="hidden md:flex flex-row items-center gap-8">
          <Link
            href={routes.courses}
            className={`text-xl ${
              pathname === routes.courses
                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            Courses
          </Link>
          <Link
            href={routes.blog}
            className={`text-xl ${
              pathname === routes.blog
                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            Blog
          </Link>
          <Link
            href={routes.pricing}
            className={`text-xl ${
              pathname === routes.pricing
                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                : "text-black"
            }`}
          >
            Pricing
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center gap-4">
          <Link href={routes.login} className="text-black text-lg">
            Log In
          </Link>
          <Link
            href={routes.signup}
            className="flex bg-blue-600 text-white p-1 rounded-lg text-lg"
          >
            Sign Up
          </Link>
        </div>
        <button
          className="flex md:hidden"
          onClick={() => setIsDrawerIconOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <Menu className="text-black w-8 h-8" />
        </button>
      </div>
      {isDrawerIconOpen && (
        <div className="flex md:hidden flex-col w-full bg-white gap-3 px-6 py-4">
          <Link
            href={routes.courses}
            className={`text-xl ${
              pathname === routes.courses
                ? "text-blue-600 font-bold"
                : "text-black"
            }`}
          >
            Courses
          </Link>
          <hr />
          <Link
            href={routes.blog}
            className={`text-xl ${
              pathname === routes.blog ? "text-blue-600 font-bold" : "text-black"
            }`}
          >
            Blog
          </Link>
          <hr />
          <Link
            href={routes.pricing}
            className={`text-xl ${
              pathname === routes.pricing
                ? "text-blue-600 font-bold"
                : "text-black"
            }`}
          >
            Pricing
          </Link>
          <hr />
          <Link href={routes.login} className="text-black text-xl">
            Log In
          </Link>
          <hr />
          <Link href={routes.signup} className="text-black text-xl">
            Sign Up
          </Link>
        </div>
      )}
    </>
  );
}
