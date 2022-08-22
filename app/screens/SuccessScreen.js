import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <Screen className={`bg-white h-full justify-center`}>
      <TouchableOpacity
        style={{
          top: Constants.statusBarHeight,
          left: 20,
          position: "absolute",
          zIndex: 100,
        }}
        className="bg-white p-3 rounded-full shadow-lg"
        onPress={() => navigation.navigate("Home")}
      >
        <Icon type="antdesign" name="home" color="black" size={16} />
      </TouchableOpacity>
      <View className={`self-center`}>
        <View className={`p-5 w-full `}>
          <Image
            source={require("../assets/car_animation.gif")}
            className={`w-60 h-40`}
          />
        </View>
        <View className={`p-5 text-center self-center`}>
          <Text className={`font-bold text-lg mb-3 text-center`}>
            Your {data?.title} is on the way
          </Text>
          <Text className={`text-base text-center`}>
            Ride cost: ${data?.price}
          </Text>
          <Text className={`text-base text-center`}>
            Estimated time: ${data?.time}
          </Text>
          <Text className={`text-base text-center`}>
            Estimated distance: ${data?.distance}
          </Text>
        </View>
      </View>
    </Screen>
  );
};

export default SuccessScreen;
