import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="order-3 md:order-2 p-3 md:py-5 bg-gray-800 w-full ">
      <ul className="flex justify-between md:justify-start md:gap-12 cursor-pointer w-full">
        <Link href="/admin">
          <li>Links</li>
        </Link>
        <Link href="/admin/appearance">
          <li>Appearance</li>
        </Link>
        <Link href="/admin/analytics">
          <li>Analytics</li>
        </Link>
        <Link href="/admin/settings">
          <li>Settings</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
