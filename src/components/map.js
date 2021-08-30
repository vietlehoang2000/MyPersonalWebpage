import * as React from "react";
import { useState } from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import {AiOutlineHome} from 'react-icons/ai'


export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "80%",
    latitude: 21.048,
    longitude: 105.752,
    zoom: 14.55,
  });

  const styleHomeIcon={fontSize:"30px",color:"white",cursor:"pointer"}

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/vietlehoang/cksxwab4z8gsf17qhp89lf646"
      mapboxApiAccessToken="pk.eyJ1IjoidmlldGxlaG9hbmciLCJhIjoiY2tzeHZ5dXV1MDFwMDJubW9wc3F2eWhyeSJ9.5w6v1tTTNw5gS9n6AW-j_w"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
        <Marker latitude={21.048} longitude={105.752} offsetLeft={-20} offsetTop={-10}>
        <AiOutlineHome style={styleHomeIcon}></AiOutlineHome>
      </Marker>
    </ReactMapGL>
  );
}
