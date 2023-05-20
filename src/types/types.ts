interface MenuItemType {
    id: string;
    name: string;
    shortDescription: string;
    price: number;
}

interface ReservationType {
    id?: string;
    date: string;
    itens: MenuItemType[];
}

export {
    MenuItemType,
    ReservationType
}