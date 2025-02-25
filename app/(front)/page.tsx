import React from "react";
import NavBar from "../components/front-components/NavBar";

export default function IndexPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#C5C9C7] text-[#A1A399] flex flex-col items-center justify-center p-6">
        <header className="text-4xl font-bold mb-6">
          ROCKSIDE HISTORIC RACING
        </header>

        <p className="text-lg text-center max-w-2xl">
          Welcome to Rockside Historic Racing. Experience the thrill of classic
          motorsport with a modern touch.
        </p>

        <button className="mt-6 bg-[#D11E1E] text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-[#b71a1a] transition">
          Get Started
        </button>
      </div>
      <div className="min-h-screen bg-[#6F3842] text-[#A1A399] flex flex-col items-center justify-center p-6">
        <header className="text-4xl font-bold mb-6">
          ROCKSIDE HISTORIC RACING
        </header>

        <p className="text-lg text-center max-w-2xl">
          Welcome to Rockside Historic Racing. Experience the thrill of classic
          motorsport with a modern touch.
        </p>

        <button className="mt-6 bg-[#D11E1E] text-white px-6 py-2 rounded-2xl shadow-lg hover:bg-[#b71a1a] transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
