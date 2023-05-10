import { PropsWithChildren, createContext, useContext, useState } from "react";

import { Plate } from "../components/general/models";

const PlatesContext = createContext<Plate[]>(
    [
        {
            id: '',
            name: '',
            shortDescription: '',
            price: 0,
        }
    ]
);

export const PlatesContextProvider = ({ children }: PropsWithChildren) => {
    const [plates, setPlates] = useState<Plate[]>([
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
        <PlatesContext.Provider value={ plates }>{ children }</PlatesContext.Provider>
    );
}

export const usePlatesContext = () => {
    const context = useContext<Plate[]>(PlatesContext);

    if(context === undefined) {
        throw new Error("context is undefined");
    }

    return context;
}