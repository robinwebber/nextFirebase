// import React from "react";
import Link from "next/link";
import { link } from "fs";

const linkStyle = {
  marginRight: 15
};

const Nav = () => (
  <div>
    <Link href="/">
      <a style={linkStyle} title="Home Page">
        Home
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} title="About Page">
        About
      </a>
    </Link>
    <Link href="/topsecretfiles">
      <a style={linkStyle} title="Top Secret Files">
        Top Secret Files
      </a>
    </Link>
  </div>
);

export default Nav;
