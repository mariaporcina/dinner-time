import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

interface ReservationContextProps {
    date: Date;
    setDate: Dispatch<SetStateAction<Date>>;
}

export const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export default function ReservationContextProvider ({ children }: PropsWithChildren) {
    const [date, setDate] = useState(new Date());
    
    const reservationContext: ReservationContextProps = {
        date,
        setDate
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