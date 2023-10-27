


export const GetMovies = async (categorie: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${categorie}?api_key=9aa78ca98887fa07d12c1b459bab0362`
  );

  const data = await response.json();

  return data.results;
};
