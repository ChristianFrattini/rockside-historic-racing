"use client";

import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const MyMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const latitude = 54.96;
  const longitude = -1.6;

  const iconUrl = "/map-pin.svg"; // Local file in /public

  useEffect(() => {
    if (!mapRef.current) return;

    // Convert coordinates to OpenLayers format
    const coordinates = fromLonLat([longitude, latitude]);

    // Create a map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }), // Base map layer
      ],
      view: new View({
        center: coordinates, // Center the map at the location
        zoom: 11,
      }),
    });

    // Create a marker (pin)
    const marker = new Feature({
      geometry: new Point(coordinates),
    });

    // Style the marker with an icon
    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1], // Adjusts positioning of the icon
          src: iconUrl, // Example pin icon
          scale: 2, // Adjust size
        }),
      }),
    );

    // Add marker to a vector layer
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    });

    map.addLayer(vectorLayer);

    return () => map.setTarget(undefined); // Cleanup when unmounting
  }, []);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};

export default MyMap;
