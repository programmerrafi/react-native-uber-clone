import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Map from "../components/Map";
import MapNavigator from "../navigation/MapNavigator";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Redux/slice/navSlice";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  useEffect(() => {
    if (!origin) navigation.replace("Home");
  }, []);

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
