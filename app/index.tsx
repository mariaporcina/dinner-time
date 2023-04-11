import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import { Container } from "../src/components/general/styles";

import RegisterForm from "../src/components/register/form";
import WelcomeSection from "../src/components/general/welcomeSection";
import Header from "../src/components/general/header";
import FormNavigation from "../src/components/general/formNavigation";

export default function Home() {
  const router = useRouter();

  const handleLinkClick = () => {
    router.push({
      pathname: "/login",
    });
  }

  return (
    <View style={ styles.view }>
      <Header />

      <WelcomeSection />
      
      <RegisterForm handlePress={ handleLinkClick } />

      <FormNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#edf2f4',
    paddingBottom: 50,
  },
});
