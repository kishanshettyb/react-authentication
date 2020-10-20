import React, { Component } from "react";
import { View, Text, Button } from "native-base";

export default function CategoriesDetails({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Categories Details</Text>
      <Button block warning onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home page</Text>
      </Button>
    </View>
  );
}
