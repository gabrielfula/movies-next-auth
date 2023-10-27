import CardMovie from "@/components/CardMovie/CardMovie";
import { GetMovies } from "@/service/api";
import { MoviesType } from "@/types/types";

export default async function Popular() {
  const movies = await GetMovies("now_playing");

  return (
    <div>
      <h1>Popular</h1>
      <div>
        {movies.map((item: MoviesType) => {
          return (
            <CardMovie
              key={item.id}
              title={item.title}
              overview={item.overview}
              poster_path={item.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}
