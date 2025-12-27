"use client";
import { GraduationCap, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function CoursePage() {
  const [isDrawerIconOpen, setIsDrawerIconOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between bg-white dark:bg-white sm:items-center px-2 md:px-4 gap-1 py-4 md:py-3">
        <div className="hidden md:flex flex-row items-center gap-8">
          <Link
            href={'routes.courses'}
            // className={`text-xl ${
            //   pathname === routes.courses
            //     ? "text-blue-600 font-bold border-b-2 border-blue-600"
            //     : "text-black"
            // }`}
          >
            Vocabulary
          </Link>
          <Link
            href={'routes.blog'}
            // className={`text-xl ${
            //   pathname === routes.blog
            //     ? "text-blue-600 font-bold border-b-2 border-blue-600"
            //     : "text-black"
            // }`}
          >
            Grammar
          </Link>
          <Link
            href={'routes.pricing'}
            // className={`text-xl ${
            //   pathname === routes.pricing
            //     ? "text-blue-600 font-bold border-b-2 border-blue-600"
            //     : "text-black"
            // }`}
          >
            Kanji
          </Link>
        </div>
      </div>
    </>
  );
}
