import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/calculator",
      text: "Calculator",
    },
    {
      id: 3,
      path: "/qoute",
      text: "Qoute",
    },
  ];
  return (
    <nav className="navbar">
      <h1 className="logo">Math Magicians</h1>
      <ul className="link-list">
        {links.map((link) => (
          <li className="list-item" key={link.id}>
            <NavLink className="oneLink" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
