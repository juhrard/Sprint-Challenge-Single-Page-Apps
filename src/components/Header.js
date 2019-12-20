import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
        <h2>Links:</h2>
        <Link to="/characterlist/1">Characters!</Link>
        <Link to="/locationslist/1">Locations!</Link>
      </nav>
    </header>
  );
}
