import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import { Container } from "../../src/components/general/styles";

import LoginForm from "../../src/components/login/form";
import WelcomeSection from "../../src/components/general/welcomeSection";
import Header from "../../src/components/general/header";
import FormNavigation from "../../src/components/general/formNavigation";

export default function Login() {
    const router = useRouter();

    const handleLinkClick = () => {
        router.push({
            pathname: "/reservation",
        });
    }

    return (
        <View style={ styles.view }>
            <Header />

            <WelcomeSection />
            
            <LoginForm handlePress={ handleLinkClick } />

            <FormNavigation formPage={'login'} />
        </View>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#edf2f4',
    paddingBottom: 50
  },
});
