import React from "react";
import Hero from "../components/front-components/Hero";
import HeroLinkCards from "../components/front-components/HeroLinkCards";
import FeaturedVehicles from "../components/front-components/FeaturedVehicles";
import MapSection from "../components/front-components/MapSection";

export default function IndexPage() {
  return (
    <div>
      <div className={"bg-greyish"}>
        <Hero />
        <HeroLinkCards />
        <div className={"mx-5"}>
          <FeaturedVehicles />
        </div>

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
