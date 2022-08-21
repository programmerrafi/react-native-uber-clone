import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../Redux/slice/navSlice";

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
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          renderDescription={(row) => row.terms[0].value}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          returnKeyType={"search"}
          debounce={400}
          minLength={2}
          keyboardShouldPersistTaps="always"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            console.log("data", data.description);
            console.log("details", details.geometry);
            // dispatch(
            //   setOrigin({
            //     location: details.geometry.location,
            //     description: data.description,
            //   })
            // );
            // dispatch(setDestination(null));
          }}
          onFail={(error) => console.error(error)}
        />

        {/* <NavOptions /> */}
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
