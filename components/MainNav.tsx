import Link from "next/link";
import React from "react";

import {
  HiGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineViewGrid,
} from "react-icons/hi";

const menu = [
  {
    title: "Projects",
    link: "/",
    icon: <HiOutlineViewGrid size={24} />,
  },
  {
    title: "News",
    link: "/",
    icon: <HiGlobeAlt size={24} />,
  },
  {
    title: "How it works",
    link: "/",
    icon: <HiOutlineQuestionMarkCircle size={24} />,
  },
];

export default function MainNav() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-8">
        {menu.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className="flex items-center justify-center gap-3"
            >
              {item.icon}
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
