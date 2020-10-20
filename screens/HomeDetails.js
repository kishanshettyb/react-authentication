import React from "react";
import { View, Text, Button } from "native-base";

export default function HomeDetails({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Details</Text>
      <Button block primary onPress={() => navigation.goBack()}>
        <Text>Go Back Home</Text>
      </Button>
    </View>
  );
}
