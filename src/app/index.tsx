import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false} // esconde a barra de rolagem
      >
        <Image
          source={require("@/assets/img1.png")}
          style={styles.illustration}
        />

        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>
          Acesse sua conta com e-mail e senha.
        </Text>

        <View style={styles.form}>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button label="Entrar" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    padding: 32, // O padding vem para cá, empurrando o conteúdo interno
    paddingBottom: 64,
  },

  illustration: {
    width: "100%",
    height: 320,
    resizeMode: "contain",
    marginTop: 62,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
  },

  form: {
    marginTop: 24,
    gap: 16,
  },
});
