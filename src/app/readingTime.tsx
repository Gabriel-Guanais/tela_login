import { Button } from "@/components/button";
import Card from "@/components/card";
import { router } from "expo-router";
import React, { useState } from "react"; // IMPORTANTE: importar o useState
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  // Criamos o estado. Ele começa como nulo (nenhum selecionado)
  const [cardAtivo, setCardAtivo] = useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titulo}>Qual o seu nivel de leitura</Text>

      <View style={styles.container}>
        <Card
          nome="Turista"
          descricao="Ué, o balão de fala tá ao contrário?"
          imagemUrl={require("@/assets/kiluT.png")}
          // Verifica se o estado atual é igual ao nome deste card
          selecionado={cardAtivo === "Turista"}
          // Quando clicado, salva o nome deste card no estado
          aoPressionar={() => setCardAtivo("Turista")}
        />

        <Card
          nome="O Iludido"
          descricao="Sei lá"
          imagemUrl={require("@/assets/kilu.png")}
          selecionado={cardAtivo === "O Iludido"}
          aoPressionar={() => setCardAtivo("O Iludido")}
        />

        <Card
          nome="Modo Zumbi"
          descricao="Devora 150 capítulos..."
          imagemUrl={require("@/assets/kiluZ.png")}
          selecionado={cardAtivo === "Modo Zumbi"}
          aoPressionar={() => setCardAtivo("Modo Zumbi")}
        />

        <Card
          nome="Mestre Scan"
          descricao="Tem 40 abas abertas..."
          imagemUrl={require("@/assets/kiluM.png")}
          selecionado={cardAtivo === "Mestre Scan"}
          aoPressionar={() => setCardAtivo("Mestre Scan")}
        />

        <Button label="Proximo" onPress={() => router.push("..")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Ajuda a distribuir o espaço extra entre os cards
    paddingHorizontal: 10, // Dá um respiro nas laterais da tela
  },

  button: {},
});
