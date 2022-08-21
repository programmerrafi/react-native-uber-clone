import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";

const data = [
  {
    id: "3423",
    icon: "home",
    location: "Home",
    destination: "Code street, London, UK",
  },
  {
    id: "36567",
    icon: "briefcase",
    location: "Work",
    destination: "Londone Eye, London, UK",
  },
];

const NavFavourites = () => {
  const dispatch = useDispatch();

  const handlePress = () => {};

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          className={`flex-row items-center py-3`}
          onPress={handlePress}
        >
          <Icon
            className={`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="feather"
            color="white"
            size={18}
          />
          <View>
            <Text className={`font-bold text-lg`}>{item.location}</Text>
            <Text className={`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View className={[`bg-gray-200`, { height: 0.5 }]} />
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
