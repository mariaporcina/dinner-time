import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import MenuItem from "./menuItem";

import { MenuItemType } from "../../general/models";
import { Container } from "../../general/styles";
import MenuFilter from "./menuFilter";

import { useMenuContext } from "../../../contexts/MenuContext";

const MenuList = () => {
    const menuList = useMenuContext();
    const [filteredMenu, setFilteredMenu] = useState<MenuItemType[]>([]);

    if(menuList === undefined || menuList.length === 0) {
        return <Text>Loading...</Text>
    }
        
    return (
        <Container style={styles.container}>
            <MenuFilter setFilteredData={setFilteredMenu} />
            
            <FlatList
                data={filteredMenu.length !== 0 ? filteredMenu : menuList}
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