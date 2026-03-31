import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface CardProps {
  // psso usar tanto o type quanto o interface para fazer a tipagem
  nome: string;
  valor: string;
  imagemUrl: string;
}

const Card = ({ nome, valor, imagemUrl }: CardProps) => {
  return (
    <View>
      <Image source={{ uri: imagemUrl }} />
      <Text>{nome}</Text>
      <Text>{valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
