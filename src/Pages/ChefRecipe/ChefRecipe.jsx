import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeItems from "../RecipeItems/RecipeItems";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  return (
    <div className="custom-container">
      <LazyLoadImage
        src={profile_picture}
        className="lg:w-8/12 rounded"
        alt=""
      />
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
      <div className="flex space-x-4">
        <a
          href="/"
          aria-label="Likes"
          className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
        >
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
            >
              <polyline
                points="6 23 1 23 1 12 6 12"
                fill="none"
                strokeMiterlimit="10"
              />
              <path
                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
          <p className="font-semibold">7.4K</p>
        </a>
      </div>
      {/* ------- Recipe Items ------- */}
      <div>
        <h1 className="text-center text-3xl font-semibold text-slate-800 mt-4">
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
