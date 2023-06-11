import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({onSelectCategory}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        renderItem={({ item }) => <CategoryItem 
          category={item} 
          onSelectCategory= {onSelectCategory}
          />}
        data={categories}
        keyExtractor={(category) => category}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
