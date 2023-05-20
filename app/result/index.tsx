import { StyleSheet, View, Text, FlatList, Alert } from "react-native";
import { useRouter } from "expo-router";

import { ReservationType } from "../../src/types/types";

import MenuItem from "../../src/components/menu/menuList/menuItem";
import Header from "../../src/components/general/header";
import WelcomeSection from "../../src/components/general/welcomeSection";
import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";

import { useReservationContext } from "../../src/contexts/ReservationContext";
import useCollection from "../../hooks/useCollection";

export default function Reservation() {
    const { create } = useCollection<ReservationType>('reservations');
    const { date, selectedItems, setSelectedItems } = useReservationContext();

    const router = useRouter();

    const handleLinkClick = () => {
        router.push({
            pathname: "/menu",
        });

        setSelectedItems([]);
    }

    const handlePress = async () => {
        const newReservation: ReservationType = {
            date: date.toLocaleString(),
            itens: selectedItems
        }
        Alert.alert("Realizar reserva", `Confirme os dados da sua reserva: ${newReservation.date}. Confirmar?`, [
            {
                text: "Yes",
                onPress: async () => {
                    try {
                        await create(newReservation);
            
                    } catch (error: any) {
                        Alert.alert("Create Reservation error", error.toString());
                    }
                },
            },
            {
              text: "No",
              style: "cancel",
            },
        ]);
    }

    return (
        <View style={styles.view}>
            <Header page="result" title="Reserva" />

            <WelcomeSection customStyle={styles.welcomeSection} title="Confira os dados da sua reserva" />

            <Text style={styles.textContainer}>
                <Text style={styles.text}>Data selecionada: </Text>
                <Text>{ date.toLocaleString() }</Text>
            </Text>

            <Container>
                <FlatList
                    data={selectedItems}
                    renderItem={({ item }) => <MenuItem plate={item} isMenu={false} />}
                    keyExtractor={plate => plate.id} />
            </Container>

            <Container style={styles.buttonContainer}>
                <FormButton style={styles.button} onPress={handleLinkClick}>
                    <FormButtonText>Trocar pratos</FormButtonText>
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