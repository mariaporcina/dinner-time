import { StyleSheet, View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import MenuItem from "../../src/components/menu/menuList/menuItem";
import Header from "../../src/components/general/header";
import WelcomeSection from "../../src/components/general/welcomeSection";
import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";

import { MenuItemType } from "../../src/components/general/models";

export default function Reservation() {
    const [plates, setPlates] = useState<MenuItemType[]>([
        {
            id: '1',
            name: 'Strogonoff',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        },
        {
            id: '2',
            name: 'Strogonoff 2',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        }
    ]);

    const router = useRouter();

    const handleLinkClick = () => {
        router.push({
            pathname: "/menu",
        });
    }

    const handlePress = () => {}

    return (
        <View style={styles.view}>
            <Header page="result" title="Reserva" />

            <WelcomeSection customStyle={styles.welcomeSection} title="Confira os dados da sua reserva" />

            <Text style={styles.textContainer}>
                <Text style={styles.text}>Data selecionada: </Text>
                <Text>13/05/2023 20:00</Text>
            </Text>

            <Container>
                <FlatList
                    data={plates}
                    renderItem={({ item }) => <MenuItem plate={item} isMenu={false} />}
                    keyExtractor={plate => plate.id} />
            </Container>

            <Container style={styles.buttonContainer}>
                <FormButton style={styles.button} onPress={handleLinkClick}>
                    <FormButtonText>Voltar</FormButtonText>
                </FormButton>
                <FormButton style={styles.button} onPress={handlePress}>
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
        paddingBottom: 50,
    },
    textContainer: {
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 10
    },
    button: {
        flexBasis: "48.8%",
    },
    welcomeSection: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: "auto",
    }
});