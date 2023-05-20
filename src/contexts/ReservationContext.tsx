import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

import { MenuItemType } from "../types/types";

interface ReservationContextProps {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
    selectedItems: MenuItemType[];
    setSelectedItems: Dispatch<SetStateAction<MenuItemType[]>>;
}

export const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export default function ReservationContextProvider ({ children }: PropsWithChildren) {
    const [date, setDate] = useState<Date>(new Date());
    const [selectedItems, setSelectedItems] = useState<MenuItemType[]>([]);
    
    const reservationContext: ReservationContextProps = {
        date,
        setDate,
        selectedItems,
        setSelectedItems,
    }

    return (
        <ReservationContext.Provider value={ reservationContext }>{ children }</ReservationContext.Provider>
    );
}

export const useReservationContext = () => {
    const context = useContext<ReservationContextProps | undefined>(ReservationContext);

    if(context === undefined) {
        throw new Error("context is undefined. useReservationContext must be used inside ReservationContextProvider");
    }

    return context;
}