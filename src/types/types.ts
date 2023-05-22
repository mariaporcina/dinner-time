interface MenuItemType {
    id: string;
    name: string;
    shortDescription: string;
    price: number;
}

interface ReservationType {
    id: string;
    date: string;
    itens: MenuItemType[];
    userId: string;
}

export {
    MenuItemType,
    ReservationType
}