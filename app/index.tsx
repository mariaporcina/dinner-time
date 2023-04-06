import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import { Container } from "../src/components/general/styles";

import Form from "../src/components/general/form";
import WelcomeSection from "../src/components/general/welcomeSection";
import Header from "../src/components/general/header";

export default function Home() {
  return (
    <View style={ styles.view }>
      <Header />

      <WelcomeSection />
      
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
});
