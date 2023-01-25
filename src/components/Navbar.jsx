import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
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
        <button>Login</button>
      </nav>
    </header>
  );
}
