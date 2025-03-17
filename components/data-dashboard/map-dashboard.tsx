'use client'

import { useRef, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function MapDashboard() {
  // Mock GeoJSON data
  const geoJSONdata = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Cherokee Nation",
          year: 1866,
          tribe: "Cherokee",
          acres: 7500000,
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-95.5, 35.0],
              [-94.5, 35.0],
              [-94.5, 36.0],
              [-95.5, 36.0],
              [-95.5, 35.0],
            ],
          ],
        },
      }
    ]
  }

  const mapRef = useRef(null)

  const onEachFeature = (feature: { properties: { name: any; tribe: any; year: any; type: any; acres: { toLocaleString: () => any; }; }; }, layer: { bindPopup: (arg0: string) => void; }) => {
    if (feature.properties) {
      layer.bindPopup(`
        <strong>${feature.properties.name}</strong><br/>
        Tribe: ${feature.properties.tribe}<br/>
        Year: ${feature.properties.year}<br/>
        Area: ${feature.properties.acres.toLocaleString()} acres
      `)
    }
  }

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
         <GeoJSON data={geoJSONdata} style={{ color: "#16404D", fillColor: "#16404D", weight: 1, opacity: 0.8, fillOpacity: 0.4 }}  onEachFeature={onEachFeature}/>
        <ZoomControl position="bottomright" />
        </MapContainer>
      )}
      </div>
    </div>
  );
}
