import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it
import { AiOutlineHome } from "react-icons/ai";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "80%",
    latitude: 21.048,
    longitude: 105.752,
    zoom: 14.55,
  });

  const [selectedHome, setSelectedHome] = useState(null);

  const styleHomeIcon = { fontSize: "30px", color: "white", cursor: "pointer" };

  return (
    <ReactMapGL
      id="myMap"
      {...viewport}
      mapStyle="mapbox://styles/vietlehoang/cksxwab4z8gsf17qhp89lf646"
      mapboxApiAccessToken="pk.eyJ1IjoidmlldGxlaG9hbmciLCJhIjoiY2tzeHZ5dXV1MDFwMDJubW9wc3F2eWhyeSJ9.5w6v1tTTNw5gS9n6AW-j_w"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      <Marker
        latitude={21.048}
        longitude={105.752}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <AiOutlineHome
          onClick={() => setSelectedHome(true)}
          style={styleHomeIcon}
        ></AiOutlineHome>
      </Marker>
      {selectedHome && (
        <Popup
          latitude={21.048}
          longitude={105.752}
          offsetLeft={-20}
          offsetTop={-10}
          onClose={()=>setSelectedHome(null)}
        >
          <h4 className="text-center">My Sweet Home</h4>
          Lô 30E , Khu đấu giá 3ha, Bắc Từ Liêm, Hà Nội, Việt Nam
        </Popup>
      )}
    </ReactMapGL>
  );
}
