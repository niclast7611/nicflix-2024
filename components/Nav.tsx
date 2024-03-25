import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 p-5">
      <div className="flex justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className=" w-28 object-contain  cursor-pointer"
          onClick={() => router.push("/")}
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
          className="w-10 rounded-md"
        />
      </div>
    </div>
  );
};

export default Nav;
