"use client";

import { LogIn } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <div
          className="flex text-sm gap-2 items-center cursor-pointer"
          onClick={() => signIn()}
        >
          <p>Fazer Login</p>
          <LogIn />
        </div>
      ) : (
        <h1>Usuario</h1>
      )}
    </>
  );
}
