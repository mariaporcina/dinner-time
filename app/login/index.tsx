import { StyleSheet, View } from "react-native";
import { Redirect } from "expo-router";

import LoginForm from "../../src/components/login/form";
import WelcomeSection from "../../src/components/general/welcomeSection";
import Header from "../../src/components/general/header";
import FormNavigation from "../../src/components/general/formNavigation";

import useAuth from "../../hooks/useAuth";

export default function Login() {
    const { user } = useAuth();

    if(user) {
        return <Redirect href="/allReservations" />;
    }

    return (
        <View style={ styles.view }>
            <Header page='login' />

            <WelcomeSection
                title={"Bem vindo de volta!\nIt's Dinner Time!"}
                subtitle="Acesse sua conta para fazer sua reserva." />
            
            <LoginForm />

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
