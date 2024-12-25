import { View, Text, Image } from "react-native";
import React from "react";

const EditProfile = ({ route }) => {
  const profile = route.params;

  return (
    <View>
      <Image source={profile.image} style={{ width: 160, height: 160 }} />
      <Text style={{ fontSize: 18 }}>{profile.name}</Text>
    </View>
  );
};

export default EditProfile;
