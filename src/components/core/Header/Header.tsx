import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header container">
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
