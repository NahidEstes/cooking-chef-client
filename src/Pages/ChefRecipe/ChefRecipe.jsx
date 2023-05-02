import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  //   const { name, profile_picture, details } = { chefData };
  return (
    <div className="custom-container">
      <img src={chefData.profile_picture} className="w-8/12" alt="" />
      <div>
        <h2>{chefData.name}</h2>
        <p>{chefData.details}</p>
      </div>
    </div>
  );
};

export default ChefRecipe;
