import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import profile from "../datas/profileData";
import { useNavigation } from "@react-navigation/native";
import Products from "../datas/Products";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Image source={profile.image} style={{ width: 160, height: 160 }} />
      <Text style={{ fontSize: 18 }}>{profile.name}</Text>
      <Text>My Items</Text>

      <FlatList
        data={Products}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{
              padding: 10,
              marginBottom: 10,
            }}
          >
            <Image
              source={item.productsImage}
              style={{ width: 100, height: 100, marginBottom: 5 }}
            />
            <Text style={{ fontSize: 16 }}>{item.productsName}</Text>
            <Text style={{ fontSize: 14, color: "gray" }}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

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
    </ScrollView>
  );
};

export default Profile;
