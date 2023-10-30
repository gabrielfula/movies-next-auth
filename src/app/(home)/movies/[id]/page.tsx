import { GetIndividual } from "@/service/api";

interface MoviesIndividualProps {
  params: {
    id: string;
  };
}

export default async function MoviesIndividual({
  params,
}: MoviesIndividualProps) {
  const movie = await GetIndividual(params.id);

  console.log(movie);

  return (
    <div>
      <p>MoviesIndividual</p>
      <p>{params.id}</p>
    </div>
  );
}
