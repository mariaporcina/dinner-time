import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

import Header from "../../src/components/general/header";
import MenuList from "../../src/components/menu/menuList";

export default function Reservation() {
    return (
        <View style={styles.view}>
            <Header page='manu' />

            <Text>Choose your plates!</Text>

            <MenuList />
            
            <Link href="/result">Check result</Link>
            <Link href="/reservation">Go Back</Link>
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