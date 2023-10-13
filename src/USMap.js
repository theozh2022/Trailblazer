import React from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./USMap.css"

const USMap = () => {
  return (
    <MapContainer
      center={[39.0997, -94.5786]}
      zoom={4}
      style={{ height: "500px", width: "70%", margin: "20 auto" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}

export default USMap
