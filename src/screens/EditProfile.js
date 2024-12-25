import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ route }) => {
  const navigation = useNavigation();
  const profile = route.params;
  const [text, setText] = useState(profile.name);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.navigate("Profile")} title="Save" />
      </View>

      <View style={styles.imageContainer}>
        <Image source={profile.image} style={styles.profileImage} />
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>upload image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Edit your first name"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Edit your last name"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Edit your phonenumber"
          onChangeText={(newText) => setText(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Edit your email"
          onChangeText={(newText) => setText(newText)}
        />
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Setting</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="moon-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="language-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="help-outline" size={24} color="#333" />
          <Text style={styles.settingText}>Help Center</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  imageContainer: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 12,
  },
  uploadButton: {
    padding: 8,
  },
  uploadText: {
    color: "#007AFF",
    fontSize: 16,
  },
  formContainer: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  settingsContainer: {
    marginVertical: 20,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
  logoutContainer: {
    marginTop: "auto",
    paddingVertical: 20,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default EditProfile;
