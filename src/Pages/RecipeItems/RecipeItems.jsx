import React from "react";

const RecipeItems = ({ recipeItem }) => {
  const { name, description, ingredients, instructions, image_url } =
    recipeItem;
  return (
    <div className="mt-10">
      <img
        src={image_url}
        className="rounded"
        style={{ width: "450px", height: "350px" }}
        alt=""
      />
      <h1 className="text-2xl font-bold text-slate-800">{name}</h1>
      <p>{description}</p>
      <div>
        {ingredients.map((ingredient, id) => (
          <div key={id}>
            <p className="text-slate-700">Ingredients: {ingredient.name}</p>
            <p className="text-slate-700">Quantity: {ingredient.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-800">
          Cooking Method:
        </h1>
        <p className="text-slate-700">{instructions}</p>
      </div>
    </div>
  );
};

export default RecipeItems;
