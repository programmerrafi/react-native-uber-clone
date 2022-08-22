import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import Screen from "./Screen";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../Redux/slice/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-123",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SEARCH_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  // const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    if (!origin || !destination) navigation.push("NavigateCard");
  }, [origin, destination]);

  const travelConst = (item) => {
    return (
      (travelTimeInformation?.duration?.value *
        SEARCH_CHARGE_RATE *
        item?.multiplier) /
      100
    ).toFixed(2);
  };

  const onChoose = () => {
    if (!selected) return Alert.alert("Please select a ride option");
    navigation.push("SuccessScreen", {
      data: {
        ...selected,
        distance: travelTimeInformation?.distance?.text,
        time: travelTimeInformation?.duration.text,
        price: travelConst(selected),
      },
    });
  };

  return (
    <Screen className={`bg-white h-full`}>
      <View className={`items-center flex-row justify-center mb-3`}>
        <TouchableOpacity
          style={{ left: 10, position: "absolute", zIndex: 100 }}
          onPress={() => navigation.push("NavigateCard")}
        >
          <Icon
            type="antdesign"
            name="arrowleft"
            color="black"
            size={23}
            className={`p-3`}
          />
        </TouchableOpacity>
        <Text className={`text-center text-xl font-bold`}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <View className={`flex-1 mt-2`}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={`flex-row items-center justify-between px-5 ${
                selected?.id === item.id && "bg-gray-100"
              }`}
              onPress={() => setSelected(item)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View className={`flex-row items-center justify-between flex-1`}>
                <View>
                  <Text className={`text-xl font-bold text-black`}>
                    {item.title}
                  </Text>
                  <Text className={`text-gray-600`}>
                    {travelTimeInformation?.duration?.text} Travel time
                  </Text>
                </View>
                <Text className={`text-gray-800 text-lg`}>
                  {/* {new Intl.NumberFormat('en-us', {
                                        style: 'currency',
                                        currency: 'USD'
                                    }).format(
                                        travelConst(item)
                                    )} */}
                  ${travelConst(item)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          className={`bg-black py-3 m-3 rounded-lg ${
            !selected && "bg-gray-300"
          }`}
          disabled={!selected}
          onPress={onChoose}
        >
          <Text className={`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
