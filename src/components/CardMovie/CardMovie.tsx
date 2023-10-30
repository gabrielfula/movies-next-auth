"use client";

import { MoviesType } from "@/types/types";
import Image from "next/image";
import { Card } from "../ui/card";
import { useRouter } from "next/navigation";

export default function CardMovie({
  title,
  overview,
  poster_path,
  id,
}: MoviesType) {
  const { push } = useRouter();

  const handlePage = (id: number) => {
    push(`/movies/${id}`);
  };

  return (
    <Card className="w-full flex flex-col items-center text-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="rounded"
        height={200}
        width={200}
        alt="Posters Movies"
        onClick={() => handlePage(id)}
      />

      <p className="truncate w-[9rem] text-sm">{title}</p>
      {/* <p>OverView...</p> */}
    </Card>
  );
}
