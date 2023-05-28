import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const ItemListCategories = () => {
  return (
    <>
      <Header title={category} />
      <View style={styles.container}>
        <Text>ItemListCategory</Text>
      </View>
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
