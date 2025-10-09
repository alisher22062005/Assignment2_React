import { Sparkles, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex p-[5%] bg-white w-full fixed top-0  justify-between border-b-[1px] border-b-gray-300  lap:p-[1%] lap:pl-[7%]  lap:justify-start ">
        <div className="flex gap-[0.3rem] lap:w-[55%] w-[70%] gap-[2%] ">
          <div className="flex items-center  bg-gradient-to-r from-blue-600 to-purple-600 rounded-[0.7rem] ">
            <Sparkles
              className="p-[23%] h-7 w-7 lap:h-8 lap:w-8 lap:p-[25%] "
              color="white"
            />
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-[1.1rem] lap:text-[1.2rem] font-bold">
            Sharipov Alisher
          </div>
        </div>
        <div className=" hidden text-[1rem] lap:flex gap-[5%] flex-1  font-semibold text-gray-400 ">
          <button onClick={() => navigate("/")} className="hover:text-black">
            Home
          </button>
          <button
            onClick={() => navigate("/news")}
            className="hover:text-black"
          >
            News
          </button>
          <button className="hover:text-black">Skills</button>
          <button className="hover:text-black">Projects</button>
          <button className="hover:text-black">Contacts</button>
          <button
            className={` flex text-[0.9rem]  justify-center items-center p-[2%] rounded-[0.6rem] text-white font-semibold   bg-gradient-to-r from-blue-600 to-purple-600 lap:p-[1%] lap:w-[7rem] `}
          >
            Get in touch
          </button>
        </div>
        <div className="lap:hidden">
          <Menu />
        </div>
      </div>
    </>
  );
}
