import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface CardProps {
  // psso usar tanto o type quanto o interface para fazer a tipagem
  nome: string;
  descricao: string;
  imagemUrl: any;
  selecionado: boolean;
  aoPressionar: () => void;
}

const Card = ({
  nome,
  descricao,
  imagemUrl,
  selecionado,
  aoPressionar,
}: CardProps) => {
  return (
    <TouchableOpacity
      onPress={aoPressionar}
      style={[styles.cardContainer, selecionado && styles.cardSelecionado]}
      activeOpacity={0.7}
    >
      <Image style={styles.imagemProduto} source={imagemUrl} />
      <Text style={styles.textoNome}>{nome}</Text>
      <Text style={styles.textoValor}>{descricao}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "48%",
    // Colocamos uma borda transparente por padrão para o card não "pular" de tamanho quando for selecionado
    borderWidth: 2,
    borderColor: "transparent",
  },
  cardSelecionado: {
    // Quando selecionado, a borda ganha cor
    borderColor: "#007BFF", // Mude para a cor que preferir
    backgroundColor: "#F0F8FF", // Opcional: muda um pouco a cor de fundo também
  },
  imagemProduto: {
    width: 100, // Ajustei um pouco para caber melhor nos 48%
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  textoNome: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textoValor: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});

export default Card;
