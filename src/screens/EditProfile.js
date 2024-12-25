import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ route }) => {
  const navigation = useNavigation();
  const profile = route.params;
  const [text, setText] = useState(profile.name);

  return (
    <View>
      <View>
          <Button onPress={() => navigation.navigate("Profile")} title="Save" />
      </View>
      <View>
        <Image source={profile.image} style={{ width: 160, height: 160 }} />
        <Text>upload image</Text>
      </View>
      <View>
        <TextInput
          placeholder="Edit your first name"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          placeholder="Edit your last name"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          placeholder="Edit your phonenumber"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          placeholder="Edit your email"
          onChangeText={(newText) => setText(newText)}
        />
      </View>
      <View>
        <Text>Setting</Text>
        <Ionicons name="notifications-outline">Notification</Ionicons>
        <Ionicons name="moon-outline">Dark Mode</Ionicons>
        <Ionicons name="language-outline">Language</Ionicons>
        <Ionicons name="help-outline">Help Center</Ionicons>
      </View>
      <View>
        <Button onPress={() => navigation.navigate("Home")} title="LogOut" />
      </View>
    </View>
  );
};

export default EditProfile;
