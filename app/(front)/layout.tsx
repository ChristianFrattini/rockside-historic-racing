import React, { type ReactNode } from "react";
import NavBar from "../components/front-components/NavBar";
import Footer from "../components/front-components/Footer";
import { Toaster } from "react-hot-toast";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className={"front-layout min-h-screen"}>
        <NavBar />
        {children}
        <Toaster position={"bottom-right"} />
        <Footer />
      </main>
    </>
  );
}
