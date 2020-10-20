import React from "react";
import { View, Text, Button } from "native-base";

export default function Categories({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Categories Screen</Text>
      <Button
        block
        warning
        onPress={() => navigation.navigate("CategoriesDetails")}
      >
        <Text>Go Inside Categories page</Text>
      </Button>
    </View>
  );
}
