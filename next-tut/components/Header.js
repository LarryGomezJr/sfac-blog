import React from 'react'
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Image from "next/image";
import sfac from "../public/images/sfac.png"
import Link from "next/link";

function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-4">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2 ">
          <Link href={"/"}>
            <Image src={sfac} alt="sfac" />
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <ImFacebook color="#3b5998" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#00acee" />
            </Link>
            <Link href={"/"}>
              <ImYoutube color="#c4302b" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header