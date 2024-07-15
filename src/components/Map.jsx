import React from 'react';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import '../css/Map.css';
import { showDataOnMap } from '../utils/util';

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className='map'>
      <LeafletMap center={center} zoom={zoom}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
