import React, { useEffect } from "react";
import L from "leaflet";

const Map = () => {
    // Create our map tile layer:
    const MAP_TILE = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    // Define the styles that are to be passed to the map instance:
    const mapStyles = {
      overflow: "hidden",
      width: "100%",
      height: "100vh"
    };
  
    const mapParams = {
        center: [63.43049, 10.39506],
        zoom: 3,
        zoomControl: true,
        maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
        layers: [MAP_TILE]
      };

      useEffect(() => {
        const map = L.map("map", mapParams)
      }, []);

    return (
      <div>
        <div id="map" style={mapStyles} />
      </div>
    )
  }
  
  export default Map