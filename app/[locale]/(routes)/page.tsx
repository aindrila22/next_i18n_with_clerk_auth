'use client';

import Image from "next/image";
import logo from "../../../public/logo.png";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center mx-auto w-full max-w-3xl h-screen font-mulish">
      <div className="border border-gray-200  rounded-lg shadow-md w-full px-5 py-20  grid place-items-center mx-auto">
        <div className="text-4xl my-6 font-bold">
          <Image src={logo} alt="" width={200} height={200} />
        </div>
        <div className="text-2xl my-6 font-medium ">
          For more info please login
        </div>
        <SignedOut>
          <Link href="/sign-in">
            <button className="w-40 text-white bg-slate-800 rounded-md py-3 font-bold text-lg uppercase">
              Login
            </button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
}
