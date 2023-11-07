export const GetMovies = async (categorie: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${categorie}?api_key=9aa78ca98887fa07d12c1b459bab0362`
  );

  const data = await response.json();

  return data.results;
};

export const GetIndividual = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=9aa78ca98887fa07d12c1b459bab0362`
  );

  const data = await response.json();

  return data;
};

export const GetSearch = async (search: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9aa78ca98887fa07d12c1b459bab0362&query=${search}`
  );

  const data = await response.json();

  return data.results;
};
