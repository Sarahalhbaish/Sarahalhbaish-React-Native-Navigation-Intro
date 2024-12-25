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
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="filter-outline" size={24} color="#333" />
      </View>

      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive,
              ]}
            >
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.productsGrid}>
        {filteredProducts.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.productCard}
            onPress={() => navigation.navigate("ItemDetails", item)}
          >
            <Image source={item.productsImage} style={styles.productImage} />
            <Text style={styles.productName}>{item.productsName}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: "#333",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  categoryTextActive: {
    color: "#fff",
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
});

export default HomeScreen;
