import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

import { MenuItemType, ReservationType } from "../types/types";
import useCollection from "../../hooks/useCollection";

interface AllReservationsContextProps {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
}

interface ReservationsCollectionType {
    data: ReservationType[];
    loading: boolean;
    create: (newVal: ReservationType) => Promise<string>;
    remove: (id: string) => Promise<void>;
    update: (id: string, newVal: ReservationType) => Promise<any>;
    all: () => Promise<ReservationType[]>;
    refreshData: () => void;
}

export const AllReservationsContext = createContext<ReservationsCollectionType | undefined>(undefined);

export default function AllReservationsContextProvider ({ children }: PropsWithChildren) {
    const reservationsCollection = useCollection<ReservationType>('reservations');

    return (
        <AllReservationsContext.Provider value={ reservationsCollection }>{ children }</AllReservationsContext.Provider>
    );
}

export const useAllReservationsContext = () => {
    const context = useContext<ReservationsCollectionType | undefined>(AllReservationsContext);

    if(context === undefined) {
        throw new Error("context is undefined. useAllReservationsContext must be used inside AllReservationsContextProvider");
    }

    return context;
}