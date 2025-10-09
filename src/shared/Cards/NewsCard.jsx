import { Calendar, Newspaper } from "lucide-react";
export default function NewsCard({
  title,
  abstract,
  image,
  date,
  subsection,
  section,
}) {
  return (
    <>
      <div className="flex flex-col items-center   w-[90%] lap:w-[29%] gap-[1rem] border-[1px] rounded-[1.5rem]  border-gray-300">
        <div className="flex justify-center ">
          <img
            className=" rounded-tl-[1.5rem] rounded-tr-[1.5rem]"
            src={image}
          ></img>
        </div>
        <div className="p-[5%] flex flex-col gap-[1rem]">
          {" "}
          <div className="flex gap-[5%]">
            <div className="w-[20%]  flex items-start  justify-end">
              <Newspaper className="bg-blue-300 text-white bg-gradient-to-r from-blue-600 to-purple-600 h-10 w-10 p-[18%] rounded-[0.5rem]" />
            </div>
            <div className="flex flex-col  gap-[0.5rem]">
              {" "}
              <div className=" line-clamp-2  font-semibold  ">{title}</div>
              <div className="flex text-[0.9rem]  text-gray-500  gap-[2%]   ">
                <Calendar className="h-5 " />
                <div className="flex items-center">{date.slice(0, 10)}</div>
              </div>
            </div>
          </div>
          <div className="  max-w-[95%] lap:max-w-[90%] line-clamp-3 text-gray-500 ">
            {abstract}
          </div>
          <div className="flex gap-[3%] font-medium text-[0.8rem]">
            <div className="bg-gray-200 p-[0.4rem]  rounded-[0.8rem]">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
            <div className="bg-gray-200 p-[0.4rem]  rounded-[0.8rem]">
              {subsection.charAt(0).toUpperCase() + subsection.slice(1)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
