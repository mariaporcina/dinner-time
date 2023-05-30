import { StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/general/header";
import WelcomeSection from "../../src/components/general/welcomeSection";
import ReservationForm from "../../src/components/reservation/form";

export default function Reservation() {
    const router = useRouter();

    const handleLinkClick = () => {
        router.push({
            pathname: "/menu",
        });
    }
    
    return (
        <View style={styles.view}>
            <Header page='reservation' title="Nova reserva" />

            <WelcomeSection
                title="Realize sua reserva"
                subtitle="Selecione a data e a hora para fazer sua reserva." />

            <ReservationForm handlePress={handleLinkClick} />
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