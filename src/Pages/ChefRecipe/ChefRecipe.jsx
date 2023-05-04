import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeItems from "../RecipeItems/RecipeItems";

const ChefRecipe = () => {
  const chefData = useLoaderData();
  const {
    name,
    profile_picture,
    details,
    experience_years,
    num_recipes,
    recipe,
  } = chefData;
  console.log(recipe);
  return (
    <div className="custom-container">
      <img src={profile_picture} className="lg:w-8/12 rounded" alt="" />
      <div className="my-4">
        <h2 className="text-4xl font-bold text-gray-700">{name}</h2>
        <p className="my-3 lg:w-8/12">{details}</p>
        <p className="mb-2  text-gray-500">
          <span className="font-semibold text-gray-600">Experience:</span>{" "}
          {experience_years} Years
        </p>
        <p className="mb-2  text-gray-500">
          <span className="font-semibold text-gray-600">
            Number of Recipe:{" "}
          </span>
          {num_recipes}
        </p>
      </div>
      {/* ------- Recipe Items ------- */}
      <div>
        <h1 className="text-center text-3xl font-semibold text-slate-800 ">
          {name}'s Recipe Items{" "}
        </h1>

        {/* ---- Recipe Item Page ----  */}
        <div>
          {recipe &&
            recipe.map((recipeItem) => (
              <RecipeItems key={recipeItem.recipe_id} recipeItem={recipeItem} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
