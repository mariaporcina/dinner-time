import React, { useState } from "react";
import { FlatList } from "react-native";
import MenuItem from "./menuItem";

import { Plate } from "../../general/models";

const MenuList = () => {
    const [plates, setPlates] = useState<Plate[]>([
        {
            id: '1',
            name: 'Strogonoff',
            shortDescription: 'loren ipsum dolor sit amet',
        },
        {
            id: '2',
            name: 'Strogonoff 2',
            shortDescription: 'loren ipsum dolor sit amet',
        },
        {
            id: '3',
            name: 'Strogonoff 3',
            shortDescription: 'loren ipsum dolor sit amet',
        }
    ]);

    return (
        <FlatList
            data={plates}
            renderItem={({item}) => <MenuItem plate={item} />}
            keyExtractor={plate => plate.id} />
    );
}

export default MenuList;