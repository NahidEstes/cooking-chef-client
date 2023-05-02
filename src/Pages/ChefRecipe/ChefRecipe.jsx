import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return <div>ChefRecipe</div>;
};

export default ChefRecipe;
