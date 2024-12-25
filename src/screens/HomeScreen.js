import {
  Button,
  StyleSheet,
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Products from "../datas/Products";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All" },
    { id: "accessories", label: "Accessories" },
    { id: "School supplies", label: "School supplies" },
    { id: "clothing", label: "Clothing" },
  ];

  const filterProducts = () => {
    let filtered = Products;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.productsName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => {
        switch (selectedCategory) {
          case "accessories":
            return ["Sunglasses", "Iphone Case"].includes(item.productsName);
          case "stationery":
            return ["Notebook", "Pencil"].includes(item.productsName);
          case "clothing":
            return ["Gloves"].includes(item.productsName);
          default:
            return true;
        }
      });
    }
    return filtered;
  };

  const filteredProducts = filterProducts();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
      >
        <TextInput placeholder="Search" />
        <Ionicons name="filter-outline" size={24} color="black" />
      </View>

      <View>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[selectedCategory === category.id]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={[selectedCategory === category.id]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        {filteredProducts.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("ItemDetails", item)}
          >
            <Image
              source={item.productsImage}
              style={{ width: 160, height: 160 }}
            />
            <Text style={{ fontSize: 18 }}>{item.productsName}</Text>
            <Text style={{ fontSize: 18 }}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
