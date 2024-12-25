import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ItemDetails from "../screens/ItemDetails";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
