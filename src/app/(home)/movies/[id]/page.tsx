import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetIndividual } from "@/service/api";
import Image from "next/image";

interface MoviesIndividualProps {
  params: {
    id: string;
  };
}

export default async function MoviesIndividual({
  params,
}: MoviesIndividualProps) {
  const movie = await GetIndividual(params.id);

  return (
    <Card className="flex flex-col items-center lg:flex-row lg:items-start">
      <CardHeader>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          width={950}
          height={400}
          alt="Movie"
        />
      </CardHeader>
      <div className="flex flex-col lg:items-start justify-center items-center gap-5 lg:justify-start lg:pt-4">
        <div className="flex gap-4 items-center ">
          <CardTitle className="text-2xl">{movie.title}</CardTitle>
          <CardDescription className="text-sm">
            {movie.release_date}
          </CardDescription>
        </div>
        <div className="pt-4">
          <CardDescription className="text-base lg:w-10/12 w-full text-zinc-400">
            {movie.overview}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
}
