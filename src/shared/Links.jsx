import { CodeXml, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import PurpleButton from "./Buttons/PuprleButton";
export default function Links() {
  return (
    <>
      <div className="flex flex-col pt-[10%] p-[5%] bg-white gap-[2rem]  lap:flex-row lap:pt-[5%] lap:pl-[6%]">
        <div className="flex flex-col gap-[1rem] lap:w-[30%]">
          <div className="flex gap-[2%] ">
            <div className="flex items-center  bg-gradient-to-r from-blue-600 to-purple-600 rounded-[0.7rem] ">
              <CodeXml className="w-8 h-8 p-[20%]" color="white" />
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center  text-[1.1rem] lap:text-[1.2rem] font-bold">
              Sharipov Alisher
            </div>
          </div>
          <div className="text-gray-500 max-w-[95%] text-[0.9rem] lap:text-[1rem]">
            Creative Frontend Developer passionate about learning and creating
            beautiful web experiences. Always excited for new challenges!
          </div>

          <div className="flex  lap:w-[30%] lap:gap-[15%]  lap:items-center gap-[5%]">
            <Github className="h-8 w-8 hover:bg-gray-300 p-[2%] lap:p-[4%] rounded-[0.5rem]  " />
            <Linkedin className="h-8 w-8 hover:bg-gray-300 p-[2%] lap:p-[4%] rounded-[0.5rem]" />
            <Mail className="h-8 w-8 hover:bg-gray-300 p-[2%] lap:p-[4%] rounded-[0.5rem]" />
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] text-gray-500 lap:flex lap:w-[30%] ">
          <div className="font-semibold text-black text-[1.1rem] lap:text-[1.2rem]">
            Quick links
          </div>
          <div className="flex gap-[40%] lap:flex-col lap:gap-[0.5rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <div>Home</div>
              <div>Skills</div>
              <div>Contacts</div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              {" "}
              <div>About</div>
              <div>Projects</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] text-gray-500">
          <div className="font-semibold text-black text-[1.1rem] lap:text-[1.2rem]">
            Get in Touch
          </div>
          <div className="flex flex-col gap-[1rem]">
            <div className="flex gap-[2%]">
              <MapPin color="red" />
              <div>Kazakhstan, Almaty</div>
            </div>
            <div className="flex gap-[2%]">
              <Mail color="gray" />
              <div>shalisher@gmail.com</div>
            </div>
            <div className="flex gap-[2%]">
              <div className="flex items-center">
                <Phone className="w-5 h-5 " color="red" fill="red" />
              </div>

              <div>+77089737816</div>
            </div>
            {/* <div className="w-full">
              {" "}
              <PurpleButton text={"Start a project"} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
