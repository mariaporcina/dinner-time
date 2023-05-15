import { PropsWithChildren, createContext, useContext } from "react";

import useCollection from "../../hooks/useCollection";

import { MenuItemType } from "../components/general/models";

export const MenuContext = createContext<MenuItemType[] | undefined>(undefined);

export default function MenuContextProvider ({ children }: PropsWithChildren) {
    const { data } = useCollection<MenuItemType>('menu');
    return (
        <MenuContext.Provider value={ data }>{ children }</MenuContext.Provider>
    );
}

export const useMenuContext = () => {
    const context = useContext<MenuItemType[] | undefined>(MenuContext);

    if(context === undefined) {
        throw new Error("context is undefined. useMenuContext must be used inside MenuContextProvider");
    }

    return context;
}