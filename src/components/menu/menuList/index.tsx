import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import MenuItem from "./menuItem";

import { Plate } from "../../general/models";
import { Container } from "../../general/styles";
import MenuFilter from "./menuFilter";

import { usePlatesContext } from "../../../contexts/PlatesContext";

const MenuList = () => {
    const plates = usePlatesContext();

    const [filteredPlates, setFilteredPlates] = useState<Plate[]>([]);

    return (
        <Container style={styles.container}>
            <MenuFilter setFilteredData={setFilteredPlates} />
            
            <FlatList
                data={filteredPlates.length !== 0 ? filteredPlates : plates}
                renderItem={({ item }) => <MenuItem plate={item} isMenu={true} />}
                keyExtractor={(item) => item.id} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
    }
});

export default MenuList;