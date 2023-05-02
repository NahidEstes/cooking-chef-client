import React from "react";
import Banner from "./Banner/Banner";
import ContentCard from "./ContentCard/ContentCard";
import Footer from "../../Layouts/Footer";
import Teams from "./Teams/Teams";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContentCard />
      <Teams />
      <Footer />
    </div>
  );
};

export default Home;
