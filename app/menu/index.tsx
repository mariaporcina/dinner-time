import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/general/header";
import MenuList from "../../src/components/menu/menuList";

import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";

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
        <View style={styles.view}>
            <Header page='menu' title="Cardápio" />

            <MenuList />

            <Container style={styles.buttonContainer}>
                <FormButton style={styles.button} onPress={handleGoBackClick}>
                    <FormButtonText>Trocar data</FormButtonText>
                </FormButton>
                <FormButton style={styles.button} onPress={handleFinishClick}>
                    <FormButtonText>Finalizar</FormButtonText>
                </FormButton>
            </Container>
        </View>
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