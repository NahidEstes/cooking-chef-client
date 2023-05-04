import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import ContentCard from "./ContentCard/ContentCard";
import Step from "./Step/Step";
import Content from "./Content/Content";

const Home = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-nahidestes.vercel.app/chef-info")
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
      });
  }, []);

  return (
    <div>
      <Banner />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {chefData.map((cData) => (
            <ContentCard key={cData.id} cData={cData} />
          ))}
        </div>
      </div>
      <Step />
      <Content />
    </div>
  );
};

export default Home;
