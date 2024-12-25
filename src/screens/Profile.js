import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import profile from "../datas/profile";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={profile.image} style={{ width: 160, height: 160 }} />
      <Text style={{ fontSize: 18 }}>{profile.name}</Text>
      <TouchableOpacity
        key={profile.id}
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("EditProfile", profile)}
      >
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
