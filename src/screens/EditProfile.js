import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import React, { useState } from "react";

const EditProfile = ({ route }) => {
  const profile = route.params;
  const [text, setText] = useState(profile.name);

  const handleSave = () => {
    console.log("Saved Name:", text);
  };

  return (
    <View>
      <View>
        <Image source={profile.image} style={{ width: 160, height: 160 }} />
        <TextInput
          placeholder="Edit your name"
          onChangeText={(newText) => setText(newText)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleSave}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
