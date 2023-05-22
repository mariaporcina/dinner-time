import { PropsWithChildren } from "react";

import MenuContextProvider from "./MenuContext";
import ReservationContextProvider from "./ReservationContext";
import AllReservationsContextProvider from "./ReservationsContext";

const AppContexts = ({ children }: PropsWithChildren) => {
    return (
        <MenuContextProvider>
            <ReservationContextProvider>
                <AllReservationsContextProvider>
                    { children }
                </AllReservationsContextProvider>
            </ReservationContextProvider>
        </MenuContextProvider>
    );
}

export default AppContexts;