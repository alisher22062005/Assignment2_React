import Experience from "../../../shared/Cards/Experience";
import { Coffee, Users, TrendingUp } from "lucide-react";
const arr = [
  { text: "Projects", number: "15+", image: Coffee },
  { text: "Coffee Cups", number: "200+", image: Coffee },
  { text: "Code Commits", number: "500+", image: TrendingUp },
  { text: "Learning Mode", number: "24/7", image: Users },
];

export default function ExperienceItems1() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-[1rem] gap-y-[1rem] lap:gap-[2%] lap:pr-[2%]">
        {" "}
        {arr.map((item, index) => {
          return (
            <Experience
              key={index}
              text={item.text}
              number={item.number}
              img={item.image}
            />
          );
        })}
      </div>
    </>
  );
}
