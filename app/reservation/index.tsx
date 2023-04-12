import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import Header from "../../src/components/general/header";
import WelcomeSection from "../../src/components/general/welcomeSection";
import ReservationForm from "../../src/components/reservation/form";

export default function Reservation() {
    return (
        <View style={styles.view}>
            <Header page='reservation' />

            <WelcomeSection
                title="Realize sua reserva"
                subtitle="Selecione a data e a hora para fazer sua reserva." />

            <ReservationForm />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#edf2f4',
        paddingBottom: 50,
    },
    link: {
        textAlign: 'center',
        color: 'blue'
    }
});