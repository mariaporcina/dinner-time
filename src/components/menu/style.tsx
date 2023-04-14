import styled from "styled-components/native";

import { colors } from "../general/constants";

const ItemContainer = styled.View`
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 2px;
    padding: 10px;
`;

const ContentContainer = styled.View`
    flex-grow: 2
`;

const PlateName = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 10px;
`;

const PlateDescription = styled.Text`
    flex-grow: 2;
`;

const PlatePrice = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const PlateImage = styled.Image`
    width: 140px;
    height: 100px;
    border-radius: 4px;
`;

export {
    ItemContainer,
    ContentContainer,
    PlateName,
    PlateDescription,
    PlatePrice,
    PlateImage
}