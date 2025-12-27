import Link from "next/link";
import React from "react";
import {
  BookMarked,
  BriefcaseBusiness,
  MessageSquareText,
  Gem,
  Sparkles,
  Target,
  Crown,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const DetailsCard = () => {
  const iconMap: any = {
    BookMarked: BookMarked,
    BriefcaseBusiness: BriefcaseBusiness,
    MessageSquareText: MessageSquareText,
    Gem: Gem,
  };
  const DetailsCardList = [
    // {
    //   icon: Sparkles,
    //   title: "JLPT N5 Course",
    //   description: "Beginner level - Learn basic vocabulary and grammar",
    // },
    // {
    //   icon: BookOpen,
    //   title: "JLPT N4 Course",
    //   description: "Elementary level - Master everyday conversations",
    // },
    // {
    //   icon: Target,
    //   title: "JLPT N3 Course",
    //   description: "Intermediate level - Handle daily life situations",
    // },
    // {
    //   icon: TrendingUp,
    //   title: "JLPT N2 Course",
    //   description: "Upper intermediate - Read newspapers and complex topics",
    // },
    // {
    //   icon: Crown,
    //   title: "JLPT N1 Course",
    //   description: "Advanced level - Master complex Japanese fluently",
    // },
    {
      icon: Target,
      title: "JLPT",
      description: "From Beginner to Advanced level",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business Japanese",
      description: "Speak Professionaly in business settings",
    },
    {
      icon: MessageSquareText,
      title: "Conversational Practice",
      description: "Improve fluency with real dialogues",
    },
    {
      icon: Gem,
      title: "Specialized Learning",
      description: "Learn Japanese for specific fields",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap py-8 px-4 gap-4">
      {DetailsCardList?.map((e, index) => {
        const IconComponent = e?.icon;
        console.log("AniketIconComponent", IconComponent);
        return (
          <Link
            href={"/"}
            className="flex flex-col border border-black p-4 rounded-xl"
            key={index}
          >
            <div className="flex flex-row gap-2 items-center">
              {IconComponent && (
                <IconComponent className="text-blue-600 w-5 h-5" />
              )}
              <text className="text-black font-medium text-xl">{e?.title}</text>
            </div>
            <text className="text-black">{e?.description}</text>
          </Link>
        );
      })}
    </div>
  );
};
export default DetailsCard;
