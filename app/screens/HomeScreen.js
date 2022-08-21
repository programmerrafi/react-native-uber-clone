import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../Redux/slice/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaWrapper flexNum={1}>
      <View className="p-5">
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 60, resizeMode: "contain" }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                loaction: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          minLength={2}
          fetchDetails={true}
          returnKeyType={"search"}
          onFail={(error) => console.error(error)}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 15,
            },
          }}
          enablePoweredByContainer={false}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
