import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { View } from "native-base";
import { AppLoading } from "expo";
import { AuthContext } from "../components/Context";

// Screens
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import HomeDetails from "../screens/HomeDetails";
import Categories from "../screens/Categories";
import CategoriesDetails from "../screens/CategoriesDetails";

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoriesDetails" component={CategoriesDetails} />
      <Stack.Screen name="HomeDetails" component={HomeDetails} />
    </Stack.Navigator>
  );
}

function OnboardingStack(props) {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    );
  } else {
    return <Login />;
  }
}

export default function Screens(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("abcd");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("abcd");
      setIsLoading(false);
    },
  }));
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppLoading />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      {userToken === null ? <OnboardingStack /> : <HomeStack />}
    </AuthContext.Provider>
  );
}
