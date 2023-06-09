import { StyleSheet, View } from "react-native";
import { Redirect } from "expo-router";

import LoginForm from "../src/components/login/form";
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
        <View style={ styles.view }>
            <Header page='login' title="Login" />

            <WelcomeSection
                title="It's Dinner Time!"
                subtitle="Acesse sua conta para fazer sua reserva."
                isLogin={ true } />
            
            <LoginForm />

            <FormNavigation formPage={'login'} />
        </View>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#edf2f4',
    paddingBottom: 10
  },
});
