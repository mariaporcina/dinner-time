import styled from "styled-components/native";

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

const ItemName = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 10px;
`;

const ItemDescription = styled.Text`
    flex-grow: 2;
`;

const ItemPrice = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const ItemImage = styled.Image`
    width: 140px;
    height: 100px;
    border-radius: 4px;
`;

export {
    ItemContainer,
    ContentContainer,
    ItemName,
    ItemDescription,
    ItemPrice,
    ItemImage
}