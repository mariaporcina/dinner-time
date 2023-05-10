import { PropsWithChildren, createContext, useContext, useState } from "react";

import { MenuItemType } from "../components/general/models";

const MenuContext = createContext<MenuItemType[]>(
    [
        {
            id: '',
            name: '',
            shortDescription: '',
            price: 0,
        }
    ]
);

export const MenuContextProvider = ({ children }: PropsWithChildren) => {
    const [plates, setPlates] = useState<MenuItemType[]>([
        {
            id: '1',
            name: 'Strogonoff',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 19.99,
        },
        {
            id: '2',
            name: 'Strogonoff 2',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 15.00,
        },
        {
            id: '3',
            name: 'Strogonoff 3',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 9.90,
        },
        {
            id: '4',
            name: 'Strogonoff 4',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 39.99,
        },
        {
            id: '5',
            name: 'Strogonoff 5',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 49.99,
        },
        {
            id: '6',
            name: 'Strogonoff 6',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 49.99,
        },
        {
            id: '7',
            name: 'Strogonoff 7',
            shortDescription: 'loren ipsum dolor sit amet',
            price: 19.99,
        }
    ]);

    return (
        <MenuContext.Provider value={ plates }>{ children }</MenuContext.Provider>
    );
}

export const useMenuContext = () => {
    const context = useContext<MenuItemType[]>(MenuContext);

    if(context === undefined) {
        throw new Error("context is undefined");
    }

    return context;
}