import { ImageSourcePropType } from "react-native/types";

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
    userId: string | undefined;
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