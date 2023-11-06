import { GetSearch } from "@/app/api/GetData/route";
import CardMovie from "@/components/CardMovie/CardMovie";
import { MoviesType } from "@/types/types";

interface MoviesSearchProps {
  params: {
    movie: string;
  };
}

export default async function SearchMovie({ params }: MoviesSearchProps) {
  const movie = await GetSearch(params.movie);

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-lg">
          Esses são os resultados para:
          <span className="text-red-600 uppercase pl-2">{params.movie}</span>
        </h1>
      </div>
      <div className="grid grid-cols-auto justify-center">
        {movie.map((item: MoviesType) => {
          return (
            <CardMovie
              key={item.id}
              id={item.id}
              title={item.title}
              overview={item.overview}
              poster_path={item.poster_path}
            />
          );
        })}
      </div>
    </>
  );
}
