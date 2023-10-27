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

export default function Header() {
  return (
    <Card className="w-full flex justify-between items-center">
      <Sheet>
        <SheetTrigger>
          <AlignLeft />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]" side={"left"}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div>
        <h1 className="text-lg">
          <span className="text-red-700">Fula</span>Movies
        </h1>
      </div>
      <div className="flex text-sm gap-2 items-center cursor-pointer">
        <p>Fazer Login</p>
        <LogIn />
      </div>
    </Card>
  );
}
