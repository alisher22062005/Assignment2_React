import { Globe } from "lucide-react";
export default function World_News() {
  return (
    <>
      <div className="flex flex-col  pt-[25%]  gap-[1rem]  items-center w-full pb-[10%] lap:pt-[10%]">
        <div className="flex p-[2%] lap:w-[20%] lap:p-[1%]   bg-violet-100   rounded-[2rem] gap-[3%] justify-center w-[52%] text-indigo-500 ">
          <div className="flex items-center">
            {" "}
            <Globe className="h-[1.3rem] " />
          </div>

          <button className="font-medium"> Global Insights</button>
        </div>
        <div className="text-purple-400">World News & Updates</div>
        <div className=" max-w-[95%] lap:max-w-[50%] text-center text-gray-500">
          Stay informed about the latest developments shaping our world. From
          breakthrough technologies to environmental initiatives and global
          economic trends.
        </div>
        {/* <div className="w-full flex justify-center">
          {" "}
          <input
            type="text"
            placeholder="Type here"
            className="input border-gray-200 focus:outline-none text-[0.9rem] w-[60%] p-[1%] border-[1px] focus:!border-gray-200  rounded-[0.5rem]"
          
          />
        </div> */}
      </div>
    </>
  );
}
