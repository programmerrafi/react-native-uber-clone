import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../Redux/slice/navSlice";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EastsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View className={`${!origin && "opacity-30"}`}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
          </View>
          <View className="p-2 bg-black rounded-full w-10 mt-4">
            <Icon name="arrowright" type="ant-design" color="#fff" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
