import React from "react";

import { StyleSheet } from "react-native";
import { FormButton, FormButtonText, ButtonContainer } from "../styles";

interface ButtonGroupProps {
    cancelButton: {
        text: string;
        handleClick: () => {};
    };
    confirmButton: {
        text: string;
        handleClick: () => {};
    };
}

export default function ButtonGroup({ cancelButton, confirmButton }: ButtonGroupProps) {
    return (
        <ButtonContainer>
            <FormButton style={ styles.button } onPress={ cancelButton.handleClick }>
                <FormButtonText>{ cancelButton.text }</FormButtonText>
            </FormButton>
            <FormButton style={ styles.button } onPress={ confirmButton.handleClick }>
                <FormButtonText>{ confirmButton.text }</FormButtonText>
            </FormButton>
        </ButtonContainer>
    )
}

const styles = StyleSheet.create({
    button: {
        flexBasis: "48.8%",
    },
})