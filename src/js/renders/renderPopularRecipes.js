import { getPopularRecipes } from "../service/API";


export const popularRecipes = document.querySelector('.popular-recipes-list');

async function renderPopularRecipes() {
  try {
    const data = await getPopularRecipes();
    createPopularRecipesList(data);
  } catch (error) {
    console.error('Error while rendering popular recipes:', error);
  }
}

function createPopularRecipesList(data) {
  const markup = data.map((recipe) => {
    return `<li class="popular-recipes-item">
      <img class="popular-recipes-image" src="${recipe.preview}" alt="${recipe.title}" />
      <div>
      <p class="popular-recipes-item-title">${recipe.title}</p>
      <p class="popular-recipes-item-description">${recipe.description}</p>
      </div>
    </li>`;
  }).join('');

  popularRecipes.innerHTML = markup;
}

renderPopularRecipes();