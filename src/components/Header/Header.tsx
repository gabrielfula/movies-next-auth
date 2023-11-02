import { AlignLeft, LogIn } from "lucide-react";
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
import { Input } from "../ui/input";

// useSession

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
      <div className="flex gap-10 items-center">
        <Input type="email" placeholder="Email" className="h-8" />
      </div>
    </Card>
  );
}
