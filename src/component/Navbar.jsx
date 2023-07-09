import React from "react";
import { NavLink } from "react-router-dom";
import { Paths } from "../component/Router";
const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={Paths.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={Paths.cart}>Cart</NavLink>
        </li>
        <li>saleh</li>
        <li>mohsen</li>
      </ul>
    </>
  );
};

export default NavBar;
