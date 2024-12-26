import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import AddItem from "../screens/AddItem";

const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AddItem" component={AddItem} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
