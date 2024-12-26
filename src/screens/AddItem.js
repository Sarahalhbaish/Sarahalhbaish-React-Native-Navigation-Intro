import React from "react";
import { View, Text,TextInput, Button, ScrollView,Image, TouchableOpacity, StyleSheet } from "react-native";

const AddItem = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.navigate("Profile")} title="Save" />
      </View>
      <Image source={require("../../assets/avatar.png")} style={styles.image} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Edit item name"
        />
        <TextInput
          style={styles.input}
          placeholder="Edit item price"
        />
        <TextInput
          style={styles.input}
          placeholder="Edit item description"
        />
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Category</Text>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Accessories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>School supplies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Clothing</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  categoryContainer: {
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  categoryButton: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  }
});

export default AddItem;
