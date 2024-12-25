import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ItemDetails = ({ route }) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.productsImage} style={styles.image} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{item.productsName}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  detailsContainer: {
    alignItems: "center",
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: "#007AFF",
  },
});

export default ItemDetails;
