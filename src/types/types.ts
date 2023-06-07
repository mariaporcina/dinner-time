import { ImageSourcePropType } from "react-native/types";

interface MenuItemType {
    id: string;
    name: string;
    shortDescription: string;
    price: number;
    image: string;
}

interface ReservationType {
    id?: string;
    date: string;
    itens: MenuItemType[];
}

interface BannerType {
    id: string;
    image: ImageSourcePropType;
    title?: string;
    text?: string;
}

export {
    MenuItemType,
    ReservationType,
    BannerType
}