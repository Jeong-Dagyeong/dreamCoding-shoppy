import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout } from "../api/firebase";

export default function Navbar() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <Header>
      <Link to="/">
        <HiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BiPencil />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </Header>
  );
}
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

// const Link = styled.link`
//   display: flex;
//   align-items: center;
// `;
