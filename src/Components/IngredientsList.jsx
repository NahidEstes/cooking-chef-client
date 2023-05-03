import React from "react";

const IngredientsList = ({ ingredient }) => {
  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap capitalize">
          {ingredient.name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {ingredient.quantity}
        </td>
      </tr>
    </tbody>
  );
};

export default IngredientsList;
