"use client";
import {
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  Crown,
  Gem,
  MessageSquareText,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CoursesPage() {
  const [searchFilter, setSearchFilter] = useState<string>("");

  const DetailsCardList = [
    {
      icon: Sparkles,
      tag: "JLPT",
      title: "JLPT N5 Course",
      image: "/images/jlpt_n5.png",
      level: "Beginner",
      description: "Learn basic vocabulary, grammar, and sentence structure",
      duration: "3–4 months",
      highlights: [
        "Hiragana & Katakana",
        "Basic grammar patterns",
        "Daily life phrases",
      ],
      cta: "View Course",
      accentColor: "#3B82F6", // blue
      badge: "Best for Starters",
    },
    {
      icon: BookOpen,
      tag: "JLPT",
      title: "JLPT N4 Course",
      image: "/images/jlpt_n4.png",
      level: "Elementary",
      description: "Master everyday conversations and expressions",
      duration: "4–5 months",
      highlights: [
        "Common kanji",
        "Listening practice",
        "Real-life conversations",
      ],
      cta: "View Course",
      accentColor: "#22C55E", // green
    },
    {
      icon: Target,
      tag: "JLPT",
      title: "JLPT N3 Course",
      image: "/images/jlpt_n3.png",
      level: "Intermediate",
      description: "Handle daily life situations confidently",
      duration: "5–6 months",
      highlights: [
        "Complex grammar",
        "Reading practice",
        "Native-style expressions",
      ],
      cta: "View Course",
      accentColor: "#6366F1", // indigo
      badge: "Popular",
    },
    {
      icon: TrendingUp,
      tag: "JLPT",
      title: "JLPT N2 Course",
      image: "/images/jlpt_n2.png",
      level: "Upper Intermediate",
      description: "Read newspapers and understand complex topics",
      duration: "6–8 months",
      highlights: ["Advanced grammar", "News & articles", "JLPT exam strategy"],
      cta: "View Course",
      accentColor: "#F59E0B", // amber
    },
    {
      icon: Crown,
      tag: "JLPT",
      title: "JLPT N1 Course",
      image: "/images/jlpt_n1.png",
      level: "Advanced",
      description: "Achieve near-native Japanese fluency",
      duration: "8–10 months",
      highlights: [
        "Academic Japanese",
        "Nuanced expressions",
        "High-level reading",
      ],
      cta: "View Course",
      accentColor: "#EF4444", // red
      badge: "Advanced",
    },
    {
      icon: BriefcaseBusiness,
      tag: "Business",
      title: "Business Japanese",
      image: "/images/business_japanese.png",
      level: "Intermediate+",
      description: "Speak professionally in Japanese business settings",
      duration: "Flexible",
      highlights: [
        "Keigo (polite language)",
        "Meetings & emails",
        "Workplace etiquette",
      ],
      cta: "View Course",
      accentColor: "#0EA5E9", // sky blue
    },
    {
      icon: MessageSquareText,
      tag: "Conversational",
      title: "Conversational Practice",
      image: "/images/conversational.png",
      level: "All Levels",
      description: "Improve fluency with real-life dialogues",
      duration: "Ongoing",
      highlights: [
        "Speaking confidence",
        "Pronunciation",
        "Natural expressions",
      ],
      cta: "Start Practicing",
      accentColor: "#8B5CF6", // purple
      badge: "Recommended",
    },
    {
      icon: Gem,
      tag: "Specialized",
      title: "Specialized Learning",
      image: "/images/specialized.png",
      level: "Custom",
      description: "Japanese for specific fields and goals",
      duration: "Custom",
      highlights: [
        "IT / Medical / Travel",
        "Custom curriculum",
        "Goal-oriented learning",
      ],
      cta: "Explore Options",
      accentColor: "#14B8A6", // teal
    },
  ];

  const [filteredData, setFilteredData] = useState<any>(DetailsCardList);

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchFilter(e.target.value);

    if (searchValue === "") {
      setFilteredData(DetailsCardList);
    } else {
      const filtered = DetailsCardList.filter((course) => {
        return (
          course.tag.toLowerCase().includes(searchValue) ||
          course.title.toLowerCase().includes(searchValue) ||
          course.level.toLowerCase().includes(searchValue) ||
          course.description.toLowerCase().includes(searchValue)
        );
      });
      setFilteredData(filtered);
    }
  };
  return (
    <div className="flex items-center flex-col px-2">
      <div className="flex flex-col items-center my-12 sm:items-center px-3">
        <h1 className="text-2xl font-bold text-black sm:justify-center">
          Choose the Right Japanese Course for you
        </h1>
        <p className="flex text-lg text-gray-700 items-center">
          JLPT · Business · Conversation · Specialized Learning
        </p>

      </div>
      <div className="flex w-80 md:w-full md:max-w-[800px] flex-col items-center gap-2 md:px-8">
        <input
          id="login"
          type="text"
          value={searchFilter}
          onChange={handleSearchFilter}
          placeholder="Search courses (e.g. JLPT N3, Buisness)"
          className="flex w-full border border-gray-300 p-2 rounded-lg text-black"
        />
      </div>
      <div className="flex flex-row gap-3 flex-wrap m-8">
        {filteredData?.map((e: any, index: number) => (
          <Link key={index} href="/courses/components/courseDetails">
          <div className="border-2 rounded-lg w-80 md:w-96 lg:w-[400px] cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative">
              <Image
                className="w-full h-40 object-cover rounded-t-lg"
                src={e.image}
                alt={e.title}
                width={1980}
                height={150}
                priority
              />
              <div className="absolute top-0 left-0 flex flex-col gap-2 p-3 items-start">
                <p
                  className={`flex p-1 rounded-md text-xs font-bold text-white ${
                    e.tag === "JLPT"
                      ? "bg-orange-600"
                      : e.tag === "Business"
                      ? "bg-green-600"
                      : e.tag === "Conversational"
                      ? "bg-purple-600"
                      : "bg-gray-600"
                  }`}
                >
                  {e?.tag}
                </p>
                <text className="text-black font-bold text-md">{e?.title}</text>
              </div>
            </div>
            <hr className="border-1" />
            <div className="inline-flex flex-col gap-2 p-3 items-start">
              <div className="flex flex-row gap-2 items-center">
                <Clock3 className="text-black w-4 h-4" />
                <text className="text-black text-sm">{e?.duration}</text>
              </div>
              <text className="text-black text-sm">{e?.description}</text>
              <div className="inline-flex bg-blue-600 px-2 py-1 rounded-md items-center self-end">
                <text className="text-sm font-bold text-white">
                  View Details
                </text>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
