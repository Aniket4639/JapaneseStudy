import Image from "next/image";
import DetailsCard from "./components/DetailsCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex items-start min-h-screen justify-start font-sans flex-col bg-gray-500 dark:bg-gray-200">
      <Navbar />
      <div className="flex flex-col relative w-full">
        <Image
          className="w-full h-100 object-cover"
          src="/images/home_background.png"
          alt="Japanese Study Background"
          width={1980}
          height={150}
          priority
        />
      </div>
      <DetailsCard />
      <text className="flex w-full px-2 md:px-0 py-2 justify-center bg-gray-300 text-black text-lg font-semibold">
        Trusted by over 1,000+ active learners and growing.
      </text>
    </div>
  );
}
