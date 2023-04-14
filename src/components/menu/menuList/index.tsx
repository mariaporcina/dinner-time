import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import MenuItem from "./menuItem";

import { Plate } from "../../general/models";
import { Container } from "../../general/styles";

const MenuList = () => {
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
        },
        {
            id: '3',
            name: 'Strogonoff 3',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        },
        {
            id: '4',
            name: 'Strogonoff 4',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        },
        {
            id: '5',
            name: 'Strogonoff 5',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        },
        {
            id: '6',
            name: 'Strogonoff 6',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        },
        {
            id: '7',
            name: 'Strogonoff 7',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 29.99,
        }
    ]);

    return (
        <Container style={styles.container}>
            <FlatList
                data={plates}
                renderItem={({item}) => <MenuItem plate={item} isMenu={true} />}
                keyExtractor={plate => plate.id} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        flexGrow: 15
    }
});

export default MenuList;