import { GetMovies } from "@/service/api";
import { MoviesType } from "@/types/types";

export default async function Popular() {
  const movies = await GetMovies("now_playing");

  console.log(movies);

  // const movies = GetMovies("now_playing");

  return (
    <div>
      <h1>Popular</h1>
      <div>
        {movies.map((item: MoviesType) => {
          return <p>{item.title}</p>;
        })}
      </div>
    </div>
  );
}
