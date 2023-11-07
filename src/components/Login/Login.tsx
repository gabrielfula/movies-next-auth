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
              {data.user?.image && <AvatarImage src={data.user.image} />}
            </Avatar>
            <p className="hover:text-zinc-50 transition-all">
              {data.user?.name}
            </p>
          </div>
          <div className="mt-5" onClick={() => signOut()}>
            <button className="flex gap-3 text-sm hover:text-zinc-50 transition-all">
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
            <p className="flex gap-2 text-center">
              Fazer Login <LogIn size={20} />
            </p>
          </div>
        </p>
      )}
    </>
  );
}
