import renderItem, { ratingScale } from '../renders/renders';
import startPagination from './pagination';
import { OpenModal } from './modal-recipes';
import Notiflix from 'notiflix';

const refs = {
  favoriteCategoriesList: document.querySelector('.favorite-categories'),
  favoriteRecipesList: document.querySelector('.favorite-list'),
  warning: document.querySelector('.empty-storage'),
  paginationBox: document.getElementById('pagination'),
  allBtn: document.querySelector('.all-btn'),
};

let currentCategory = '';

const calcPages = () => {
  const screenWidth = window.innerWidth;
  return screenWidth < 768 ? 9 : 12;
};

const groupObjects = (array, groupSize) => {
  const result = {};
  for (let i = 0; i < array.length; i += groupSize) {
    const groupName = Math.floor(i / groupSize) + 1;
    result[groupName] = array.slice(i, i + groupSize);
  }
  return result;
};

const onFavoritesReload = () => {
  const categoryMarkup = generateCategoryList();

  const allCatBtn = `<button class="button-fav all-btn onActive" name="all">All categories</button>`;

  const data = JSON.parse(localStorage.getItem('favorites')) || [];

  refs.favoriteRecipesList.innerHTML = '';
  refs.favoriteCategoriesList.innerHTML = '';

  if (data.length) {
    refs.favoriteCategoriesList.innerHTML = `${allCatBtn}${categoryMarkup}`;
  } else {
    refs.allBtn.style.display = 'none';
  }

  generateStorageList();
};

const generateStorageList = (pageSet = 1) => {
  const storage = localStorage.getItem('favorites');
  const data = JSON.parse(storage) || [];

  refs.allBtn.style.display = 'none';

  if (data.length) {
    refs.allBtn.style.display = 'block';

    const perPage = calcPages();
    const objData = groupObjects(data, perPage);
    const totalPages = Object.keys(objData).length;

    if (totalPages > 1) {
      refs.paginationBox.style.display = 'block';
      startPagination(pageSet, perPage, totalPages, generateStorageList);
    } else {
      refs.paginationBox.style.display = 'none';
    }

    const listMarkup = objData[pageSet].reduce(
      (markup, { title, description, preview, rating, id, category }) =>
        markup + renderItem(title, description, preview, rating, id, category),
      ''
    );

    refs.favoriteRecipesList.innerHTML = listMarkup;

    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
      button.onclick = () => handleFavoriteButtonClick(button);
    });

    const seeRecipeButtons = document.querySelectorAll('.item-rec');
    seeRecipeButtons.forEach(seeRecipeButton => {
      seeRecipeButton.addEventListener('click', () => {
        OpenModal(seeRecipeButton);
      });
    });

    refs.warning.classList.add('is-hidden');
  } else {
    refs.warning.classList.remove('is-hidden');
    refs.allBtn.classList.add('is-hidden');

    // if (window.innerWidth < 768) {
    //   refs.hiroImg.classList.add('is-hidden');
    // }
  }


  if (data.length === 0) {
    refs.warning.classList.remove('is-hidden');
    refs.paginationBox.style.display = 'none';
    refs.favoriteCategoriesList.innerHTML = '';
    refs.allBtn.style.display = 'none';
  } else {
    refs.warning.classList.add('is-hidden');
  }
};

const generateCategoryList = () => {
  const storage = localStorage.getItem('favorites');
  const data = JSON.parse(storage) || [];
  if (data.length) {
    return data
      .flatMap((recipe) => recipe.category)
      .filter((category, index, array) => array.indexOf(category) === index)
      .reduce(
        (categoryMarkup, category) => categoryMarkup + renderCategory(category),
        ''
      );
  }
  return '';
};

const renderCategory = (category) => `<button class="button-fav">${category}</button>`;

const filterByCategory = (evt) => {
  if (evt.target.classList.contains('onActive')) return;

  let data = [];
  let categoryRecipes;
  refs.favoriteRecipesList.innerHTML = '';

  if (evt !== Number(evt) && evt.target.nodeName === 'BUTTON') {
    setActiveClass(evt);
    if (evt.target.name === 'all') return generateStorageList();
    else currentCategory = evt.target.textContent;
  }

  const storage = localStorage.getItem('favorites');
  data = JSON.parse(storage) || [];

  if (!data.length) {
    refs.favoriteCategoriesList.style.display = 'none';
    return;
  }

  categoryRecipes = [...data.filter((recipe) => recipe.category === currentCategory)];

  let pageSet = 1;

  if (Number(evt) === evt) pageSet = evt;

  const perPage = calcPages();
  const objData = groupObjects(categoryRecipes, perPage);
  const totalPages = Object.keys(objData).length;

  if (totalPages > 1) {
    refs.paginationBox.style.display = 'block';
    startPagination(pageSet, perPage, totalPages, filterByCategory);
  } else {
    refs.paginationBox.style.display = 'none';
  }

  const listMarkup = objData[pageSet].reduce(
    (markup, { title, description, preview, rating, id, category }) =>
      markup + renderItem(title, description, preview, rating, id, category),
    ''
  );

  refs.favoriteRecipesList.innerHTML = listMarkup;

  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  favoriteButtons.forEach(button => {
    button.onclick = () => handleFavoriteButtonClick(button);
  });
};

const setActiveClass = (evt) => {
  const activeBtn = document.querySelector('.onActive');
  if (activeBtn) activeBtn.classList.remove('onActive');
  evt.target.classList.add('onActive');
};


const handleFavoriteButtonClick = (button) => {
  const infoRecipe = JSON.parse(button.dataset.info);
  const storage = localStorage.getItem('favorites');
  let data = JSON.parse(storage) || [];

  const recipeIndex = data.findIndex(recipe => recipe.id === infoRecipe.id);

  if (recipeIndex !== -1) {
    const removedRecipeCategory = data[recipeIndex].category;
    data.splice(recipeIndex, 1);
    localStorage.setItem('favorites', JSON.stringify(data));


    const remainingData = JSON.parse(localStorage.getItem('favorites')) || [];
    const otherRecipesInCategory = remainingData.some(
      recipe => recipe.category === removedRecipeCategory
    );

    if (!otherRecipesInCategory) {

      const recipeCards = document.querySelectorAll('.item');
      recipeCards.forEach(card => {
        if (card.dataset.category === removedRecipeCategory) {
          card.remove();
        }
      });


      const categoryButtons = refs.favoriteCategoriesList.querySelectorAll('.button-fav');
      categoryButtons.forEach(categoryButton => {
        if (categoryButton.textContent === removedRecipeCategory) {
          categoryButton.remove();
        }
      });
    }
  }


  const remainingData = JSON.parse(localStorage.getItem('favorites')) || [];
  if (remainingData.length === 0) {
    refs.favoriteRecipesList.innerHTML = '';
    refs.allBtn.style.display = 'none';
    refs.warning.classList.remove('is-hidden');
    refs.paginationBox.style.display = 'none';
    refs.favoriteCategoriesList.innerHTML = '';
  } else {
    generateStorageList();
  }
};

document.addEventListener('DOMContentLoaded', onFavoritesReload);
refs.favoriteCategoriesList.addEventListener('click', filterByCategory);
