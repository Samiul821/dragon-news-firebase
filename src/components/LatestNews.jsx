import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const todayPick = data.filter((news) => news.others?.is_today_pick);
        setLatestNews(todayPick);
      });
  }, []);

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <div className="flex space-x-4">
          {latestNews.map((news) => (
            <p className="font-semibold" key={news.id}>{news.title}</p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
