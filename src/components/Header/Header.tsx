import { AlignLeft, Search } from "lucide-react";
import { Card } from "../ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import Login from "../Login/Login";

export default function Header() {

  return (
    <Card className="w-full flex justify-between items-center pr-10">
      <Sheet>
        <SheetTrigger>
          <AlignLeft />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]" side={"left"}>
          <SheetHeader className="space-y-6">
            <SheetTitle className="text-zinc-200">Menu</SheetTitle>
            <SheetDescription className="hover:text-zinc-50 transition-all">
              <Login />
            </SheetDescription>
            <SheetDescription>
              <a href="" className="hover:text-zinc-50 transition-all">
                Aventura
              </a>
            </SheetDescription>
            <SheetDescription>
              <a href="" className="hover:text-zinc-50 transition-all">
                Ação
              </a>
            </SheetDescription>
            <SheetDescription>
              <a href="" className="hover:text-zinc-50 transition-all">
                Infantil
              </a>
            </SheetDescription>
            <SheetDescription>
              <a href="" className="hover:text-zinc-50 transition-all">
                Filmes
              </a>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div>
        <Link href="/" className="text-xl">
          <span className="text-red-700">Fula</span>Movies
        </Link>
      </div>
      <div className="flex gap-10 items-center bg-zinc-50 p-1 rounded">
        <input
          type="text"
          placeholder="Search Movie..."
          className="h-6 outline-none px-2 border-none rounded-none bg-none focus:outline-none text-black"
        />
        <button className="outline-none bg-none border-none">
          <Search color="black" />
        </button>
      </div>
    </Card>
  );
}
