import { StyleSheet, View, Text } from "react-native";
import { Redirect } from "expo-router";

import RegisterForm from "../src/components/register/form";
import WelcomeSection from "../src/components/general/welcomeSection";
import Header from "../src/components/general/header";
import FormNavigation from "../src/components/general/formNavigation";

import useAuth from "../hooks/useAuth";

export default function Home() {
    const { user } = useAuth();

    if(user) {
        return <Redirect href="/allReservations" />;
    }

    return (
        <View style={styles.view}>
            <Header page='register' />

            <WelcomeSection
                title={"Bem vindo!\nIt's Dinner Time!"}
                subtitle="Cadastre-se no app para iniciar." />

            <RegisterForm />

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
