import { Image, View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../Redux/slice/navSlice";
import { useNavigation } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    // Zoom & fit markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  const getTravelTime = async () => {
    const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`;
    const data = await fetch(URL).then((response) => response.json());
    if (data.status !== "OK") return alert(data.error_message);
    dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
    // console.log(data);
  };

  return (
    <MapView
      ref={mapRef}
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.loaction.lat,
        longitude: origin?.loaction.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {!!origin && !!destination && (
        <MapViewDirections
          // origin={{
          //     latitude: origin?.loaction.lat,
          //     longitude: origin?.loaction.lng,
          // }}
          // destination={{
          //     latitude: destination?.loaction.lat,
          //     longitude: destination?.loaction.lng,
          // }}
          origin={origin.description}
          destination={destination.description}
          lineDashPattern={[0]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
          onError={(error) => console.log("Directions error: ", error)}
        />
      )}

      {origin?.loaction && (
        <Marker
          coordinate={{
            latitude: origin?.loaction.lat,
            longitude: origin?.loaction.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.loaction && (
        <Marker
          coordinate={{
            latitude: destination?.loaction.lat,
            longitude: destination?.loaction.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

{
  /* <Image
            source={require("../assets/custom_pin.png")}
            style={{ height: 45, width: 45 }}
          />
        </Marker> */
}
