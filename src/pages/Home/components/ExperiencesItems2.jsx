import Experience2 from "../../../shared/Experience2";
import { Monitor, Smartphone, Globe } from "lucide-react";
export default function ExperienceItems2() {
  const arr = [
    {
      text: "Modern web applications built with React, Next.js, and TypeScript",
      title: "Web Development",
      image: Monitor,
    },
    {
      text: "Mobile-first designs that work perfectly on all devices",
      title: " Responsive Design",
      image: Smartphone,
    },
    {
      text: "Fast, optimized applications with excellent user experience",
      title: "Performance",
      image: Globe,
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-[1rem]  items-center pt-[10%] lap:flex-row lap:justify-center lap:gap-[2%] lap:pt-[5%]">
        {arr.map((item, index) => {
          return (
            <Experience2
              key={index}
              text={item.text}
              number={item.title}
              img={item.image}
            />
          );
        })}
      </div>
    </>
  );
}
