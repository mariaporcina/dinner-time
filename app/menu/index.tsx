import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/general/header";
import MenuList from "../../src/components/menu/menuList";

import Slider from "../../src/components/general/slider";
import ButtonGroup from "../../src/components/general/ButtonGroup";

export default function Reservation() {
    const router = useRouter();

    const handleCancelButton = () => {
        router.push({
            pathname: "/reservation",
        });
    }

    const handleConfirmButton = () => {
        router.push({
            pathname: "/result",
        });
    }

    return (
        <View style={styles.view}>
            <Header page='menu' title="Cardápio" />

            <Slider />

            <MenuList />

            <ButtonGroup
                cancelButton={{
                    text: 'Trocar data',
                    handleClick: handleCancelButton
                }}
                confirmButton={{
                    text: 'Finalizar',
                    handleClick: handleConfirmButton
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#edf2f4',
        paddingBottom: 50
    },
});