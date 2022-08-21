import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Redux/slice/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    />
  );
};

export default Map;
