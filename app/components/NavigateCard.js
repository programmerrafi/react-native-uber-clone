import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "./Screen";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination } from "../Redux/slice/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Screen className="flex-1 bg-white">
      <Text className={`text-center pb-5 text-xl font-bold`}>
        Good morning, Rafi
      </Text>
      <View
        className={`border-t border-gray-100 flex-shrink relative z-20 bg-white`}
      >
        <View className={`bg-white pb-2`}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  loaction: details.geometry.location,
                  description: data.description,
                })
              );
            }}
            minLength={2}
            fetchDetails={true}
            returnKeyType={"search"}
            onFail={(error) => console.error(error)}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            styles={toInputBoxStyles}
            enablePoweredByContainer={false}
          />
        </View>
      </View>
      <View className={`px-3 bg-white relative z-10 justify-between flex-1`}>
        <NavFavourites />
        <View
          className={`mt-3 flex-row justify-evenly py-3 border-t border-gray-100`}
        >
          <TouchableOpacity
            className={`flex-row bg-white w-24 px-4 py-3 rounded-full border border-black`}
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              color="black"
              size={16}
            />
            <Text className={`text-black text-center pl-3`}>Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row bg-black w-24 px-4 py-3 rounded-full border border-black`}
            onPress={() => navigation.push("RideOptionsCard")}
          >
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text className={`text-white text-center pl-3`}>Ride</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    borderEndWidth: 1,
    borderColor: "#ddd",
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
