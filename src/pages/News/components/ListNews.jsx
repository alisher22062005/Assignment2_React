import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonNews from "../../../shared/Cards/SkeletonNews";
import NewsCard from "../../../shared/Cards/NewsCard";
import NotFoundArticle from "../../../shared/Cards/NotFoundArticle";
import WhiteButton from "../../../shared/Buttons/WhiteButton";

export default function ListNews() {
  const API_Key = "Gx0zXJfX0mCRmO7YG1DMy2SZh5y24sAi";
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("world");
  const [inputValue, setInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (inputValue?.trim()) {
      const timer = setTimeout(() => {
        setSection(inputValue.trim().toLowerCase());
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  useEffect(() => {
    console.log("Section:", section);
    function getData() {
      setLoading(true);
      setNotFound(false);

      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_Key}`
        )
        .then((response) => {
          const filteredData = response.data.results.filter(
            (item, index) => index < 6
          );

          setNewsData(filteredData);
          setTimeout(() => setLoading(false), 2000);
        })

        .catch((error) => {
          console.log("Not found");
          setNotFound(true);
        });
    }

    getData();
  }, [section]);

  if (!loading && !notFound) {
    return (
      <>
        <div className="flex flex-col gap-[4rem]">
          {" "}
          <div className="w-full flex justify-center gap-[2rem]">
            {" "}
            <input
              value={inputValue}
              type="text"
              placeholder="Search News by title.."
              className=" border-gray-200 grow-0 bg-white text-black focus:outline-none text-[0.9rem] w-[55%] p-[2%] border-[1px] focus:!border-gray-200 lap:p-[1%]  rounded-[1rem]"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center gap-[3rem] lap:flex-row lap:flex-wrap lap:p-[10%] lap:pt-[0%]">
            {newsData?.map((item, index) => {
              const imageUrl =
                item.multimedia?.[0]?.url || "https://via.placeholder.com/300";
              return (
                <NewsCard
                  key={index}
                  title={item.title}
                  abstract={item.abstract}
                  image={imageUrl}
                  date={item.published_date}
                  section={item.section}
                  subsection={item.subsection}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  } else if (notFound) {
    return (
      <>
        <div className="flex flex-col gap-[4rem]">
          <div className="w-full flex justify-center gap-[2rem]">
            {" "}
            <input
              value={inputValue}
              type="text"
              placeholder="Search News by title.."
              className=" border-gray-200 grow-0 bg-white text-black focus:outline-none text-[0.9rem] w-[55%] p-[2%] border-[1px] focus:!border-gray-200 lap:p-[1%] rounded-[1rem]"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="pb-[10%] flex flex-col items-center gap-[2rem]">
            <NotFoundArticle />
            <WhiteButton
              onClick={() => {
                setSection("world");
                setInputValue("");
              }}
              text={"Clear filters"}
            />
          </div>
        </div>{" "}
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col gap-[4rem]">
          {" "}
          <div className="w-full flex justify-center gap-[2rem]">
            {" "}
            <input
              value={inputValue}
              type="text"
              placeholder="Search News by title.."
              className=" border-gray-200 grow-0 bg-white text-black focus:outline-none text-[0.9rem] w-[55%] p-[2%] border-[1px] focus:!border-gray-200 lap:p-[1%]  rounded-[1rem]"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center gap-[3rem] lap:flex-row lap:flex-wrap lap:p-[10%] lap:pt-[0%]">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return <SkeletonNews key={index}></SkeletonNews>;
            })}
          </div>
        </div>
      </>
    );
  }
}
