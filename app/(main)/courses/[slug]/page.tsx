"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Clock3, BookOpen, Target } from "lucide-react";

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Convert slug back to title
  const title = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-black mb-4">{title}</h1>
        <div className="border-2 rounded-lg overflow-hidden">
          <Image
            className="w-full h-64 object-cover"
            src="/images/home_background.png"
            alt={title || "Course"}
            width={1980}
            height={400}
            priority
          />
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">3-4 months</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Beginner Level</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-black mb-4">About This Course</h2>
            <p className="text-gray-700 mb-6">
              This course is designed to help you master Japanese language skills.
              You'll learn vocabulary, grammar, kanji, and conversation skills needed
              for daily communication.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">What You'll Learn</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Basic Japanese vocabulary and grammar</li>
              <li>Reading and writing Hiragana and Katakana</li>
              <li>Essential kanji characters</li>
              <li>Daily conversation skills</li>
              <li>Cultural understanding</li>
            </ul>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
