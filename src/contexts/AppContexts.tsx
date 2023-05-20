import { PropsWithChildren } from "react";

import MenuContextProvider from "./MenuContext";
import ReservationContextProvider from "./ReservationContext";

const AppContexts = ({ children }: PropsWithChildren) => {
    return (
        <MenuContextProvider>
            <ReservationContextProvider>
                { children }
            </ReservationContextProvider>
        </MenuContextProvider>
    );
}

export default AppContexts;