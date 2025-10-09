import { CodeXml } from "lucide-react";
import PurpleButton from "./Buttons/PuprleButton";
import WhiteButton from "./Buttons/WhiteButton";
export default function Build() {
  return (
    <>
      <div className="flex justify-center pt-[12%] pb-[12%] lap:pt-[7%] lap:pb-[6%]">
        <div className="flex flex-col items-center p-[6%]  gap-[1rem] rounded-[1rem] border-[1px] border-purple-300 w-[88%] lap:gap-[1.5rem] bg-violet-100 lap:pt-[3%] lap:pb-[2%] ">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[0.7rem]">
            {" "}
            <CodeXml className="w-10 h-10 p-[20%] lap:w-15 lap:h-15 text-white " />
          </div>
          <div className="font-bold text-[1.5rem] lap:text-[2rem] text-center">
            Let's Build Something Together!
          </div>
          <div className=" text-center text-gray-500 lap:max-w-[60%] lap:text-[1.3rem]">
            I'm always excited to work on new projects and collaborate with
            others. Whether it's a simple website or a complex web app, I'm
            eager to learn and contribute!
          </div>
          <div className="w-full flex flex-col gap-[1rem] lap:flex-row lap:justify-center">
            <PurpleButton text={"Get in Touch"} width={"full"} />
            <WhiteButton
              text={"View Portfolio"}
              width={"full"}
              padding={"2%"}
            />
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}
