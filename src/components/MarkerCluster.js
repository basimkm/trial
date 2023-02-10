import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from '@react-google-maps/api';

const markers = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 37.788022, lng: -122.399797 },
  { lat: 37.790154, lng: -122.394276 },
  // ...
];

const MapWithMarkerCluster = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAWcnqzFAUYGWfGyml9bOseG8Yxv1xMbGA">
      <GoogleMap
        mapContainerStyle={{
          height: '400px',
          width: '100%',
        }}
        zoom={12}
        center={{
          lat: 37.7749,
          lng: -122.4194,
        }}
      >
        <MarkerClusterer>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithMarkerCluster;
