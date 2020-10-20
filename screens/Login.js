import React from "react";
import {
  View,
  Text,
  Container,
  Content,
  Item,
  Input,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";
import { AuthContext } from "../components/Context";

export default function Login({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  return (
    <Container style={{ marginTop: 50 }}>
      <Content padder>
        <Item regular style={styles.inputpadding}>
          <Input placeholder="Email" />
        </Item>
        <Item regular style={styles.inputpadding}>
          <Input placeholder="Password" />
        </Item>
        <Button
          block
          onPress={() => {
            signIn();
          }}
        >
          <Text>Login</Text>
        </Button>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  inputpadding: {
    marginBottom: 30,
  },
});
