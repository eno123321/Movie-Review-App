import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AboutStack from "./routes/aboutStack";
import HomeStack from "./routes/homeStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{ headerShown: false }}
          name="HomeStack"
          component={HomeStack}
        />
        <Drawer.Screen
          options={{ headerShown: false }}
          name="AboutStack"
          component={AboutStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
