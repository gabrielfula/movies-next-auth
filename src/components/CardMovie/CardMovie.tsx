import { MoviesType } from "@/types/types";
import Image from "next/image";
import { Card } from "../ui/card";
import { img } from "@/service/key";

export default function CardMovie({
  title,
  overview,
  poster_path,
}: MoviesType) {
  return (
    <Card>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        height={100}
        width={100}
        alt="Posters Movies"
      />
      <p>{title}</p>
      {/* <p>OverView...</p> */}
    </Card>
  );
}
