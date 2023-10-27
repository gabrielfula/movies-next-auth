import { MoviesType } from "@/types/types";
import Image from "next/image";
import { Card } from "../ui/card";

export default function CardMovie({
  title,
  overview,
  poster_path,
}: MoviesType) {
  return (
    <Card>
      {/* <p>Image...</p> */}
      <p>{title}</p>
      {/* <p>OverView...</p> */}
    </Card>
  );
}
