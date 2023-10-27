import { MoviesType } from "@/types/types";
import Image from "next/image";

export default function Card({ title, overview, poster_path }: MoviesType) {
  return (
    <div>
      {/* <p>Image...</p> */}
      <p>{title}</p>
      {/* <p>OverView...</p> */}
    </div>
  );
}
