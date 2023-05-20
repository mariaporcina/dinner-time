import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import MenuItem from "./menuItem";

import { MenuItemType } from "../../../types/types";
import { Container } from "../../general/styles";
import MenuFilter from "./menuFilter";

import { useMenuContext } from "../../../contexts/MenuContext";

const MenuList = () => {
    const { data, loading } = useMenuContext();
    const [filteredMenu, setFilteredMenu] = useState<MenuItemType[]>([]);

    if(loading) {
        return <Text>Loading...</Text>
    }

    return (
        <Container style={styles.container}>
            <MenuFilter setFilteredData={setFilteredMenu} />
            
            <FlatList
                data={filteredMenu.length !== 0 ? filteredMenu : data}
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