import axios from 'axios';

const API_URL = 'https://tasty-treats-backend.p.goit.global/api';

export async function findMasterClasses() {
  const url = `${API_URL}/events`;
  const res = await axios.get(url);
  return res.data;
}

export async function fetchCategories() {
  try {
    const response = await axios.get(
      `${API_URL}/categories`
    );
    return response.data;
  } catch (error) {
    console.error('Помилка під час отримання категорій:', error);
    return [];
  }
}

export async function findRecipes(id) {
  const url = `${API_URL}/recipes/${id}`;
  const res = await axios.get(url);
  return res.data;
}


export const getPopularRecipes = async function () {
  try {
    const response = await axios.get( `${API_URL}/recipes/popular`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function fetchAreaRecipes() {
  const url = `${API_URL}/areas`;
  const res = await axios.get(url);
  return res.data;
}

export async function fetchIngredientsRecipes() {
  const url = `${API_URL}/ingredients`;
  const res = await axios.get(url);
  return res.data;
}

export async function patchRating(id, data) {
  const url = `${API_URL}/recipes/${id}/rating`;
  return await axios.patch(url, data);
}

export function postOrder(data) {
  return axios.post(`${API_URL}/orders/add`, data);
}
