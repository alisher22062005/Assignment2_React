import { Globe, Eye, Users, TrendingUp } from "lucide-react";
import Experience from "../../../shared/Cards/Experience";
export default function Info() {
  const arr = [
    {
      text: "Countries Covered",
      number: "195",
      image: Globe,
      backgroundIcon: "bg-purple-400",
      backgroundColor: "",
      IconColor: "text-white",
    },
    {
      text: "Monthly Readers",
      number: "2.5M+",
      image: Users,
      backgroundIcon: "bg-gradient-to-r from-green-400 to-emerald-500",
      backgroundColor: "bg-gradient-to-br from-primary/5 to-purple-600/5",
      IconColor: "text-white",
    },
    {
      text: "Live Coverage",
      number: "24/7",
      image: Eye,
      backgroundIcon: " bg-gradient-to-r from-blue-400 to-cyan-500",
      backgroundColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      IconColor: "text-white",
    },
    {
      text: "Stories Published",
      number: "500+",
      image: TrendingUp,
      backgroundIcon: "bg-gradient-to-r from-orange-400 to-red-500",
      backgroundColor: "bg-gradient-to-br from-orange-500/5 to-red-500/5 ",
      IconColor: "text-white",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center gap-[3%] gap-y-[1.5rem] justify-center pt-[10%] lap:pt-[0%]">
        {" "}
        {arr.map((item, index) => {
          return (
            <Experience
              key={index}
              text={item.text}
              number={item.number}
              img={item.image}
              backGroundIconColor={item.backgroundIcon}
              background={item.backgroundColor}
              IconColor={item.IconColor}
            />
          );
        })}
      </div>
    </>
  );
}
