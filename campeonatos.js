import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import axios from "axios";

const campeonatos = ({ navigation }) => {
  const [campeonatos, setCampeonatos] = useState();
  const token = "test_61458dbd071037525bd16a65cc0db2";
  useEffect(() => {
    axios
      .get(`https://api.api-futebol.com.br/v1/campeonatos/2/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setCampeonatos([data]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ marginTop: 50 }}
        data={campeonatos}
        keyExtractor={(id, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Fases", {
                idCampeonato: item.campeonato_id,
              });
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#b7deff",
                padding: 10,
                borderWidth: 1,
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={{ uri: item.logo }}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: 10,
                  color: "#222",
                  fontWeight: "bold",
                }}
              >
                {item.nome_popular}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default campeonatos;
