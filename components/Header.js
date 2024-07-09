"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();
  return (
    <header className={path === "/" ? "md:flex" : "bg-black"}>
      <div className="bg-gray-dark flex-1"></div>
      <nav className="flex-1 bg-black text-white text-sm">
        <ul className="flex justify-end gap-3 p-1 pr-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/statistic">Statistic</Link>
          </li>
          <li>
            <Link href="/all-expenses">All Expenses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
