import { PropsWithChildren, createContext, useContext } from "react";

import useCollection from "../../hooks/useCollection";

import { MenuItemType } from "../types/types";

interface MenuCollectionType {
    data: MenuItemType[];
    loading: boolean;
    create: (newVal: MenuItemType) => Promise<string>;
    remove: (id: string) => Promise<void>;
    update: (id: string, newVal: MenuItemType) => Promise<any>;
    all: () => Promise<MenuItemType[]>;
    refreshData: () => void;
}

export const MenuContext = createContext<MenuCollectionType | undefined>(undefined);

export default function MenuContextProvider ({ children }: PropsWithChildren) {
    const menuCollection = useCollection<MenuItemType>('menu');
    
    return (
        <MenuContext.Provider value={ menuCollection }>{ children }</MenuContext.Provider>
    );
}

export const useMenuContext = () => {
    const context = useContext<MenuCollectionType | undefined>(MenuContext);

    if(context === undefined) {
        throw new Error("context is undefined. useMenuContext must be used inside MenuContextProvider");
    }

    return context;
}