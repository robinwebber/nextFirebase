import React, { ReactNode } from "react";
import Nav from "../Nav";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => (
  <div>
    <Nav />
    {props.children}
  </div>
);

export default Layout;
