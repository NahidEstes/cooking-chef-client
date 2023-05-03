import React from "react";

const RecipeItems = ({ recipeItem }) => {
  const { name, description, ingredients, instructions, image_url } =
    recipeItem;
  return (
    <div>
      <img src={image_url} className="w-80 h-60" alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default RecipeItems;
