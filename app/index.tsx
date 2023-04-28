import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import { Container } from "../src/components/general/styles";

import RegisterForm from "../src/components/register/form";
import WelcomeSection from "../src/components/general/welcomeSection";
import Header from "../src/components/general/header";
import FormNavigation from "../src/components/general/formNavigation";

import useCollection from "../hooks/useCollection";
import { MenuItemType } from "../src/components/general/models";

export default function Home() {
    const router = useRouter();

    const { data } = useCollection<MenuItemType>("menu");
    console.log(data);

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
