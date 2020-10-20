import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import { AuthContext } from "../components/Context";

export default function Home({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Button block warning onPress={() => navigation.navigate("HomeDetails")}>
        <Text>Go Inside Home page</Text>
      </Button>
      <Button
        style={{ marginTop: 30 }}
        block
        success
        onPress={() => navigation.navigate("Categories")}
      >
        <Text>Categories</Text>
      </Button>
      <Button
        danger
        style={{ marginTop: 30 }}
        onPress={() => {
          signOut();
        }}
      >
        <Text>Logout</Text>
      </Button>
    </View>
  );
}
