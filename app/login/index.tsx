import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

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
            <Header page='login' />

            <WelcomeSection
                title={"Bem vindo de volta!\nIt's Dinner Time!"}
                subtitle="Acesso sua conta para fazer sua reserva." />
            
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
