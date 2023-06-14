import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/general/header";
import WelcomeSection from "../../src/components/general/welcomeSection";
import ReservationForm from "../../src/components/reservation/form";

export default function Reservation() {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: "/menu",
        });
    }
    
    return (
        <View style={styles.view}>
            <Header page='reservation' title="Nova reserva" />

            <WelcomeSection
                title="Realize sua reserva"
                subtitle="Selecione a data e a hora para fazer sua reserva."
                customStyle={styles.welcomeSection} />

            <ReservationForm handleConfirmButton={ handlePress } />
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
    },
    welcomeSection: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
    }
});