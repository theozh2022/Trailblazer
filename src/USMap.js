import React from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./USMap.css"
import usParks from "./us-parks.json"
import L from "leaflet"

const USMap = () => {
  // Customize the marker icon
  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 1,
      color: "#007FFF",
      fillColor: "#007FFF",
      fillOpacity: 1,
    })
  }

  // Function to bind a popup to each feature
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.NAME) {
      layer.bindPopup(feature.properties.NAME)
    }
  }

  return (
    <MapContainer
      center={[37.8, -96]}
      zoom={4}
      style={{ height: "500px", width: "70%", margin: "0 20px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON
        data={usParks}
        pointToLayer={pointToLayer}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  )
}

export default USMap
