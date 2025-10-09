import axios from "axios";
import { useEffect, useState } from "react";
import SkeletonNews from "../../../shared/Cards/SkeletonNews";
import NewsCard from "../../../shared/Cards/NewsCard";

export default function ListNews() {
  const API_Key = "Gx0zXJfX0mCRmO7YG1DMy2SZh5y24sAi";
  const [NewsData, setNewsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_Key}`
        )
        .then((response) => {
          const filteredData = response.data.results.filter(
            (item, index) => index < 6
          );

          setNewsData(filteredData);
          setTimeout(() => setLoading(false), 2000);
        })
        .catch((error) => console.log(error));
    }

    getData();
  }, []);

  if (!loading) {
    return (
      <>
        <div className="flex flex-col items-center gap-[3rem] lap:flex-row lap:flex-wrap lap:p-[10%] lap:pt-[0%]">
          {NewsData?.map((item, index) => {
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
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center gap-[3rem] lap:flex-row lap:flex-wrap lap:p-[10%] lap:pt-[0%]">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return <SkeletonNews key={index}></SkeletonNews>;
          })}
        </div>
      </>
    );
  }
}
