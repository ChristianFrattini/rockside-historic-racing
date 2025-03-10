import React from "react";
import NavBar from "../components/front-components/NavBar";
import Hero from "../components/front-components/Hero";
import HeroLinkCards from "../components/front-components/HeroLinkCards";
import FeaturedVehicles from "../components/front-components/FeaturedVehicles";
import Map from "../components/front-components/Map";
import ContactForm from "../components/front-components/ContactForm";
import LeafletMapComponent from "../components/front-components/Map";

export default function IndexPage() {
  return (
    <div>
      <div className={"bg-greyish"}>
        <Hero />
        <HeroLinkCards />
        <FeaturedVehicles />
        <div
          className={
            "flex lg:flex-row lg:justify-between gap-5 flex-col mx-5 mt-7"
          }
        >
          <LeafletMapComponent />
        </div>
      </div>

      <div className="min-h-screen bg-[#C5C9C7] text-[#A1A399] flex flex-col items-center justify-center p-6">
        <header className="text-4xl font-bold mb-6">
          ROCKSIDE HISTORIC RACING
        </header>

        <p className="text-lg text-center max-w-2xl">
          Welcome to Rockside Historic Racing. Experience the thrill of classic
          motorsport.
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
