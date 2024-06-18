import { recipes } from "./data.js";

import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeIngredients() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} />
      ))}
    </div>
  );
}
