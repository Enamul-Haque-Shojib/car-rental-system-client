import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import defaultCenterIconUrl from "../../../assets/navigation.png"

// Default marker icons
L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Custom icon for the starting point
const defaultCenterIcon = L.icon({
  iconUrl: defaultCenterIconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Routing = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(...start), L.latLng(...end)],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "#007bff", weight: 4 }],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: () => null, // Do not create default markers
    });

    routingControl.addTo(map);

    const controlContainer = routingControl.getContainer();
    if (controlContainer) {
      controlContainer.style.display = "none";
    }

    return () => {
      if (map && routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map, start, end]);

  return null;
};

const MapWithPins = ( location ) => {


  
  const [loading, setLoading] = useState(true);


  const defaultCenter = [location.start_latitude, location.start_longitude];
  const defaultZoom = 11;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  if (!location) {
    return (
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Error</DialogTitle>
          <DialogDescription>Invalid location data provided.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-[600px] p-4">
      <DialogHeader>
        <DialogTitle className="text-lg font-semibold">View Location</DialogTitle>
        <DialogDescription className="text-sm text-gray-600">
          Explore the location details below.
        </DialogDescription>
      </DialogHeader>
      <div className="w-full h-[500px] relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        )}
        <MapContainer
          center={defaultCenter}
          zoom={defaultZoom}
          scrollWheelZoom={true}
          className="w-full h-full rounded-lg shadow-md"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={defaultCenter} icon={defaultCenterIcon}>
            <Popup>
              <div className="text-sm">
                <h3 className="font-semibold">Starting Point</h3>
                <p>Coordinates: {defaultCenter[0]}, {defaultCenter[1]}</p>
              </div>
            </Popup>
          </Marker>

          <Marker position={[location.end_latitude, location.end_longitude]}>
            <Popup>
              <div className="text-sm">
                <h3 className="font-semibold">{location.end_address}</h3>
                {/* <p>{parcel.description}</p> */}
                <p>
                  <strong>Coordinates:</strong> {location.end_latitude}, {location.end_longitude}
                </p>
              </div>
            </Popup>
          </Marker>

          <Routing start={defaultCenter} end={[location.end_latitude, location.end_longitude]} />
        </MapContainer>
      </div>
    
    </DialogContent>
  );
};

export default MapWithPins;
