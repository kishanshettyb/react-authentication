import React from "react";
import { View, Text } from "native-base";
import { StyleSheet } from "react-native";

export default function Signup() {
  return (
    <View style={styles.textCenter}>
      <Text>Sign Up</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
