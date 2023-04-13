import { StyleSheet, View, Text } from "react-native";
import { Link, useRouter } from "expo-router";

import Header from "../../src/components/general/header";
import MenuList from "../../src/components/menu/menuList";
import WelcomeSection from "../../src/components/general/welcomeSection";
import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";

export default function Reservation() {
    const router = useRouter();

    const handleLinkClick = () => {
        router.push({
            pathname: "/result",
        });
    }
    
    return (
        <View style={styles.view}>
            <Header page='menu' title="Cardápio" />

            {/* <WelcomeSection 
                title="Cardápio"
                subtitle="Selecione os pratos" /> */}

            <MenuList />
            
            <Container style={styles.buttonContainer}>
                <FormButton onPress={handleLinkClick}>
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
        justifyContent: "flex-end",
        flexShrink: 3
    }
});