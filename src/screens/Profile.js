import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Products from "../datas/Products";
import { Ionicons } from "@expo/vector-icons";
import profile from "../datas/profileData";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={profile.image} style={styles.profileImage} />
        <Text style={styles.profileName}>{profile.name}</Text>
        <Text style={styles.profileDescription}>{profile.description}</Text>
      </View>

      <View style={styles.sectionHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("AddItem")}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>My Items</Text>
      </View>

      <FlatList
        data={Products}
        contentContainerStyle={styles.itemsGrid}
        numColumns={2}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={item.productsImage} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.productsName}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate("EditProfile", profile)}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 12,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: '#000000',
  },
  itemsGrid: {
    padding: 8,
  },
  itemCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },
  editButton: {
    margin: 16,
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Profile;
