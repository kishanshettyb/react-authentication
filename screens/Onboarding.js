import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Digital Marketing",
    text:
      "We provide best digital marketing services and we design best e-Com website in bangalore.",
    image: require("../assets/1.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: "two",
    title: "Social Marketing",
    text:
      "Detailed client reviews of the leading social media marketing agencies and consultants.",
    image: require("../assets/1.jpg"),
    backgroundColor: "#fff",
  },
  {
    key: "three",
    title: "SEO Optimization",
    text:
      "We don't work just for profit as other SEO Companies, rather we take pride in our values.",
    image: require("../assets/1.jpg"),
    backgroundColor: "#fff",
  },
];

export default class Onboarding extends Component {
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: item.backgroundColor,
          height: "100%",
        }}
      >
        <Image style={styles.centerImage} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.replace("Login");
  };
  render() {
    return (
      <View style={{ height: "100%" }}>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          dotStyle={styles.dots}
          activeDotStyle={styles.activeDot}
          onDone={this._onDone}
          skipLabel={<Text style={styles.skipBtn}>Skip</Text>}
          nextLabel={<Text style={styles.nextBtn}>Next</Text>}
          doneLabel={<Text style={styles.nextBtn}>Sign Up</Text>}
          showSkipButton={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    textAlign: "center",
  },
  centerImage: {
    width: "100%",
    height: 300,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    backgroundColor: "#ddd",
  },
  activeDot: {
    backgroundColor: "#0779e4",
  },
  nextBtn: {
    fontWeight: "bold",
    color: "#0779e4",
  },
  skipBtn: {
    color: "#0779e4",
    fontWeight: "bold",
  },
});
