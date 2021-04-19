import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const partidas = ({ navigation, route }) => {
  const [partidas, setPartidas] = useState();
  const token = "live_db28974480a033add1a4d5afee06bf";
  const idFase = route.params?.idFase;

  useEffect(() => {
    axios
      .get(`https://api.api-futebol.com.br/v1/campeonatos/2/fases/${idFase}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        const chaves = data.chaves;

        const lista = chaves.map((item) => {
          const partida = {};
          const { partida_ida } = item;
          partida.time_m = partida_ida.time_mandante;
          partida.placar_m = partida_ida.placar_mandante;
          partida.time_v = partida_ida.time_visitante;
          partida.placar_v = partida_ida.placar_visitante;
          return partida;
        });
        setPartidas(lista);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ marginTop: 20, width: "100%" }}
        data={partidas}
        keyExtractor={(id, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#6666",
                backgroundColor: "#b7deff",
                padding: 5,
                width: "90%",
                height: 50,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "40%",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>
                    {item.time_m.nome_popular}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "20%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      marginRight: 5,
                      fontWeight: "bold",
                    }}
                  >
                    {item.placar_m}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>x</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 5,
                      fontWeight: "bold",
                    }}
                  >
                    {item.placar_v}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "40%",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>
                    {item.time_v.nome_popular}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default partidas;
