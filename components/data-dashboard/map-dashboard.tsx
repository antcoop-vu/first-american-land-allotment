'use client'

import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function MapDashboard() {
  const mapRef = useRef(null)

  
  return (
    <div className="bg-cream/50 rounded-lg shadow-md overflow-hidden">
      <div className="col-span-3 h-[600px] relative">
        {typeof window !== "undefined" && (
        <MapContainer
          center={[39.8283, -98.5795]}
          zoom={4}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
          ref={mapRef}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        </MapContainer>
      )}
      </div>
    </div>
  );
}
