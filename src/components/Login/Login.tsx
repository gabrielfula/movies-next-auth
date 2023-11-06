"use client";

import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function Login() {
  const { status, data } = useSession();

  return (
    <>
      {status === "authenticated" && (
        <div>
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={data.user?.image} />
            </Avatar>
            <p>{data.user?.name}</p>
          </div>
          <div className="mt-5" onClick={() => signOut()}>
            <button className="flex gap-3 text-sm">
              Fazer Logout <LogOut size={20} />
            </button>
          </div>
        </div>
      )}
      {status === "unauthenticated" && (
        <p>
          <div
            className="flex text-sm gap-2 items-center cursor-pointer"
            onClick={() => signIn("google")}
          >
            <p>Fazer Login</p>
          </div>
        </p>
      )}
    </>
  );
}
