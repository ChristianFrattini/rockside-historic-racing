import React from "react";
import NavBar from "../components/front-components/NavBar";
import Hero from "../components/front-components/Hero";
import HeroLinkCards from "../components/front-components/HeroLinkCards";
import FeaturedVehicles from "../components/front-components/FeaturedVehicles";
import Map from "../components/front-components/Map";
import ContactForm from "../components/front-components/ContactForm";
import LeafletMapComponent from "../components/front-components/Map";
import MapSection from "../components/front-components/MapSection";

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
          <MapSection />
        </div>
      </div>
    </div>
  );
}
