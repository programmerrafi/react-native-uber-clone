import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import MapNavigator from "../navigation/MapNavigator";

const MapScreen = () => {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>

      <View className="h-1/2">
        <MapNavigator />
      </View>
    </View>
  );
};

export default MapScreen;
