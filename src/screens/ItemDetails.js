import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ItemDetails = ({ route }) => {
  const item = route.params;

  return (
    <View>
      <Image source={item.productsImage} style={{ width: 160, height: 160 }} />
      <Text style={{ fontSize: 18 }}>{item.productsName}</Text>
      <Text style={{ fontSize: 18 }}>{item.price}</Text>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({});
