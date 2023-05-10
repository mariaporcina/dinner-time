import { StyleSheet, View, Text } from "react-native";
import { Link, useRouter } from "expo-router";

import Header from "../../src/components/general/header";
import MenuList from "../../src/components/menu/menuList";
import WelcomeSection from "../../src/components/general/welcomeSection";
import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";

import { PlatesContextProvider } from "../../src/contexts/MenuContext";

export default function Reservation() {
    const router = useRouter();

    const handleGoBackClick = () => {
        router.push({
            pathname: "/reservation",
        });
    }

    const handleFinishClick = () => {
        router.push({
            pathname: "/result",
        });
    }

    return (
        <PlatesContextProvider>
            <View style={styles.view}>
                <Header page='menu' title="Cardápio" />

                <MenuList />

                <Container style={styles.buttonContainer}>
                    <FormButton style={styles.button} onPress={handleGoBackClick}>
                        <FormButtonText>Voltar</FormButtonText>
                    </FormButton>
                    <FormButton style={styles.button} onPress={handleFinishClick}>
                        <FormButtonText>Finalizar</FormButtonText>
                    </FormButton>
                </Container>
            </View>
        </PlatesContextProvider>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#edf2f4',
        paddingBottom: 50
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
    },
    button: {
        flexBasis: "48.8%",
    },
});