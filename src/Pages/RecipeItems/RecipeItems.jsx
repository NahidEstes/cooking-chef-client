import React, { useState } from "react";
import IngredientsList from "../../Components/IngredientsList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeItems = ({ recipeItem }) => {
  const { name, description, ingredients, instructions, image_url, rating } =
    recipeItem;
  console.log(rating);

  const [isDisabled, setIsDisabled] = useState(false);
  const favoriteButtonHandler = () => {
    toast("Added to Favorite");
    setIsDisabled(true);
  };
  return (
    <div className="mt-10 shadow-lg lg:w-8/12 lg:p-4">
      <LazyLoadImage
        src={image_url}
        className="rounded image-customize"
        style={{ width: "520px", height: "350px" }}
        alt=""
      />
      <h1 className="text-2xl font-bold text-slate-800 my-3">{name}</h1>
      <p className="lg:w-7/12">{description}</p>
      <div className="my-5">
        <h1 className="font-semibold text-xl mb-3">Ingredients</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 lg:w-8/12 md:w-6/12 inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase"
                      >
                        Ingredients
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Quantity
                      </th>
                    </tr>
                  </thead>

                  {ingredients &&
                    ingredients.map((ingredient, id) => (
                      <IngredientsList key={id} ingredient={ingredient} />
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-9/12 mb-2">
        <h1 className="text-xl font-semibold text-slate-800 mb-1">
          Cooking Method:
        </h1>
        <p className="text-slate-600">{instructions}</p>

        {/* ratings */}
        <div className="flex gap-3 items-center my-4">
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />{" "}
          <p className="font-bold">{rating}</p>
        </div>
        <div className="my-2">
          <button
            onClick={favoriteButtonHandler}
            className={
              !isDisabled
                ? "bg-orange-500 text-white p-2 rounded font-bold"
                : "bg-orange-200 text-white p-2 rounded font-bold"
            }
            disabled={isDisabled}
          >
            Favorite
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeItems;
