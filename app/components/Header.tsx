import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center p-16">
      <div>
        <h2 className="text-slate-900 font-extrabold ">Nerd Portfolio</h2>
      </div>

      <div className="flex flex-row justify-start items-center gap-4">
        <Link href="/">
          <h4>홈</h4>
        </Link>
        <Link href="/">
          <h4>방명록</h4>
        </Link>
        <Link href="/">
          <h4>연락처</h4>
        </Link>
      </div>
    </header>
  );
};

export default Header;
