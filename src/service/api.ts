import { apiRoute, key, searchRoute } from "./key";

export const GetMovies = async (categorie: string) => {
  const response = await fetch(`${apiRoute}/${categorie}?${key}`);

  const data = await response.json();

  return data.results;
};

export const GetIndividual = async (id: string) => {
  const response = await fetch(`${apiRoute}/${id}?${key}`);

  const data = await response.json();

  return data;
};

export const GetSearch = async (search: string) => {
  const response = await fetch(`${searchRoute}?${key}&query=${search}`);

  const data = await response.json();

  return data.results;
};
