import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

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
        <View style={styles.view}>
            <Header page='register' />

            <WelcomeSection
                title={"Bem vindo!\nIt's Dinner Time!"}
                subtitle="Cadastre-se no app para iniciar." />

            <RegisterForm handlePress={handleLinkClick} />

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
