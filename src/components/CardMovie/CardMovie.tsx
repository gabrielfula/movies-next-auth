import { MoviesType } from "@/types/types";
import Image from "next/image";
import { Card } from "../ui/card";
import { img } from "@/service/key";
import Link from "next/link";

export default function CardMovie({
  title,
  overview,
  poster_path,
}: MoviesType) {
  return (
    <Card className="w-full flex flex-col items-center text-center">
      
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="rounded"
          height={200}
          width={200}
          alt="Posters Movies"
        />
      

      <p className="truncate w-[9rem] text-sm">{title}</p>
      {/* <p>OverView...</p> */}
    </Card>
  );
}
