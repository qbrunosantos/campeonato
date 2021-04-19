import React from "react";
import Campeonatos from "./campeonatos.js";
import Fases from "./fases.js";
import Partidas from "./partidas.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Campeonatos"
          component={Campeonatos}
          options={{
            title: "Campeonatos",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 10,
              backgroundColor: "#b7deff",
            },
          }}
        />
        <Stack.Screen
          name="Fases"
          component={Fases}
          options={{
            title: "Fases",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 10,
              backgroundColor: "#b7deff",
            },
          }}
        />
        <Stack.Screen
          name="Partidas"
          component={Partidas}
          options={{
            title: "Partidas",
            headerTitleAlign: "center",
            headerStyle: {
              elevation: 10,
              backgroundColor: "#b7deff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
