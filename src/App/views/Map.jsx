import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import GeoJSON from "./GeoJSON.json";
import "./Map.css";

mapboxgl.accessToken = "pk.eyJ1IjoicmljYXJkb25hamFyIiwiYSI6ImNpcXpwdzRodTAybWdmc2txOTAwZm15MjQifQ.X82mZc3RwYfG6es1LZZAlg";

const MapContainer = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-110.9078);
    const [lat, setLat] = useState(27.9254);
    const [zoom, setZoom] = useState(12.5);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });

        // Render custom marker components
        GeoJSON.features.forEach((feature) => {    
            // Create a Mapbox Marker at our new DOM node
            const el = document.createElement("div");
            el.className = 'marker';
            new mapboxgl.Marker(el)
              .setLngLat(feature.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25})
              .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`)
              ).addTo(map.current);
          });
    },[]);
    
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });
    
    return (
    <div >
        {/* <div sx={{ position: 'absolute', top: 240,  }} className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <div ref={mapContainer} className="map-container" />
    </div>
    );
}

  export default MapContainer;