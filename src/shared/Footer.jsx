import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="flex justify-center text-gray-500 bg-white pb-[5%] lap:pb-[3%] ">
        {" "}
        <div className="flex justify-between pt-[5%] border-t-[1px] border-gray-300 w-[90%] text-[0.8rem] flex-col gap-[2rem] lap:p-[3%]  lap:flex-row">
          <div className="flex justify-center lap:justify-start ">
            <div className="max-w-[80%] text-center lap:max-w-full  lap:text-start lap:text-[0.9rem]">
              {" "}
              © 2025 Jordan Lee. Made with using React & Tailwind CSS
            </div>
          </div>
          <button className="flex justify-center text-black font-semibold gap-[5%] lap:w-[15%]">
            <ArrowUp className="w-5 h-5" />
            <div> Back to top</div>
          </button>
        </div>
      </div>
    </>
  );
}
