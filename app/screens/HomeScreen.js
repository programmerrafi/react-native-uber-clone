import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from "../configs/SafeAreaWrapper";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaWrapper>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
