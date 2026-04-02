import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link, router } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: "height" })}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false} // esconde a barra de rolagem
          keyboardShouldPersistTaps="handled"
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

            <Button
              label="Entrar"
              onPress={() => router.push("/readingTime")}
            />
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta?
            <Link href="/signup" style={styles.footerLink}>
              Cadastre-se aqui
            </Link>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
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
    flexGrow: 1,
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

  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860",
  },

  footerLink: {
    color: "#2b4de2",
    fontWeight: "bold",
  },
});
