"use client";

import { MoviesType } from "@/types/types";
import Image from "next/image";
import { Card } from "../ui/card";
import { useRouter } from "next/navigation";
import { ListStart, Star } from "lucide-react";

export default function CardMovie({
  title,
  poster_path,
  id,
  vote_average,
}: MoviesType) {
  const { push } = useRouter();

  const handlePage = (id: number) => {
    push(`/movies/${id}`);
  };

  return (
    <Card className="w-full flex flex-col items-center text-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="rounded cursor-pointer"
        height={200}
        width={200}
        alt="Posters Movies"
        onClick={() => handlePage(id)}
      />
      <div className="flex flex-col items-stretch w-full">
        <p className="truncate w-[9rem] text-sm text-left">{title}</p>
        <p className="text-xs text-start flex pt-2 items-center gap-1">
          {vote_average}
          <Star size={15} />
        </p>
      </div>
    </Card>
  );
}
