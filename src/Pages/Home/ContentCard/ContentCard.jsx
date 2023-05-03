import React from "react";
import { Link } from "react-router-dom";

const ContentCard = ({ cData }) => {
  const { id, name, img_url, profile_picture, experience_years, num_recipes } =
    cData;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg p-3">
      <a href="/" aria-label="Article">
        <img src={profile_picture} className="rounded w-96 h-64" alt="" />
      </a>
      <div className="py-5">
        <a
          href="/"
          aria-label="Article"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5">{name}</p>
        </a>
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
        <div className="my-2 text-end">
          <Link to={`/chef-info/${id}`}>
            <button className="bg-orange-400 text-white p-2 rounded font-bold">
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
