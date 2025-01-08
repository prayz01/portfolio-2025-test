"use client";
import { useEffect, useRef, useState } from "react";

type Link = {
  href: string;
  label: string;
};

export const Header = () => {
  const links: Link[] = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-[100]">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-item ${
              activeLink === link.href ? "btn-active" : ""
            }`}
            onClick={() => handleLinkClick(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

// bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900

{
  /* <a className="nav-item btn-active" href="#home">
          Home
        </a>
        <a className="nav-item" href="#projects">
          Projects
        </a>
        <a className="nav-item" href="#about">
          About
        </a>
        <a className="nav-item" href="#contact">
          Contact
        </a> */
}
