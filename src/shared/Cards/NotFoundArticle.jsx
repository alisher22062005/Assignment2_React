import { Search } from "lucide-react";
import WhiteButton from "../Buttons/WhiteButton";
export default function NotFoundArticle() {
  return (
    <>
      <div className="flex flex-col gap-[1rem] justify-center items-center ">
        <Search className="bg-purple-100 h-[60px] w-[60px] p-[1%] rounded-[2rem] text-gray-500" />
        <div>No articles found</div>
        <div className="text-gray-500">
          Try adjusting your search or filter criteria
        </div>
        {/* <WhiteButton className="border-3px]" text={"Clear filters"} /> */}
      </div>
    </>
  );
}
