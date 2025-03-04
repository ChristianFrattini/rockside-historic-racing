import React, { type ReactNode } from "react";
import NavBar from "../components/front-components/NavBar";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className={"front-layout min-h-screen"}>
        <NavBar />
        {children}
      </main>
    </>
  );
}
