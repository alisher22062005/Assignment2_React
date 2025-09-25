import { Github, Linkedin, Mail } from "lucide-react";
import PurpleButton from "../../../shared/Buttons/PuprleButton";
import img from "../../../assets/hero.jpeg";
export default function Intro() {
  return (
    <>
      <div className="flex flex-col p-[7%] lap:pt-[12%] gap-[5rem] lap:gap-[0px] lap:flex-row">
        <div className="flex flex-col gap-[1rem] lap:w-[50%]">
          <div className="flex flex-col  ">
            <div className=" flex flex-col text-[2rem] lap:flex-wrap font-bold  lap:text-[3.5rem]">
              {" "}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Creative
              </div>
              <div className="text-black  ">Frontend</div>
            </div>
            <div className="text-[1.3rem] font-bold text-gray-500 lap:text-[2rem] ">
              Developer
            </div>
          </div>
          <div className="pt-[5%] text-gray-500 lap:text-[1.2rem] lap:max-w-[85%]">
            I'm passionate about learning web development and creating beautiful
            user interfaces. Currently mastering React, JavaScript, and modern
            web technologies through hands-on projects.
          </div>
          <div className="flex flex-col lap:flex-row lap:gap-[3%]">
            {/* <PurpleButton padding={"1%"} width={"25%"} text={"View my work"} /> */}

            {/* <button>Let's Talk</button> */}
          </div>
          <div className="flex flex-col gap-[1.5rem] lap:flex-row lap:gap-[0px] ">
            <div className="flex  lap:w-[30%] lap:gap-[15%]  lap:items-center gap-[10%]">
              <Github className="h-8 w-8 hover:bg-gray-300 p-[2%] lap:p-[4%] rounded-[0.5rem]  " />
              <Linkedin className="h-8 w-8 hover:bg-gray-300 p-[2%] lap:p-[4%] rounded-[0.5rem]" />
              <Mail className="h-8 w-8 hover:bg-gray-300 p-[2%] lap:p-[4%] rounded-[0.5rem]" />
            </div>
            <div className="font-semibold lap:w-[35%] lap:flex lap:justify-center lap:border-l-[1px] border-l-gray-300 lap:text-[0.9rem] lap:items-center">
              Kazakhstan, Almaty
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lap:w-full lap:flex-1">
          <img
            className="rounded-[1rem]  w-full lap:max-w-[85%] lap:max-h-[85%] "
            src={img}
          ></img>
        </div>
      </div>
    </>
  );
}
