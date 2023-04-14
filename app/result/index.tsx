import { StyleSheet, View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import Header from "../../src/components/general/header";
import { Container } from "../../src/components/general/styles";
import MenuItem from "../../src/components/menu/menuList/menuItem";
import { useState } from "react";
import { Plate } from "../../src/components/general/models";

export default function Reservation() {
    const [plates, setPlates] = useState<Plate[]>([
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

    return (
        <View style={styles.view}>
            <Header page="result" title="Reserva" />

            <Text>Confira os dados da sua reserva</Text>
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

            <Link href="/login">Sair</Link>
            <Link href="/menu">Go Back</Link>
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
        textAlign: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});