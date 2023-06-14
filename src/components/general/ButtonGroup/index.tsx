import React from "react";

import { StyleSheet } from "react-native";
import { FormButton, FormButtonText, ButtonContainer } from "../styles";

interface ButtonGroupProps {
    cancelButton: {
        text?: string;
        handleClick: () => void;
    };
    confirmButton: {
        text?: string;
        handleClick: () => void;
    };
    isEditPage?: boolean;
}

export default function ButtonGroup({ cancelButton, confirmButton, isEditPage }: ButtonGroupProps) {
    return (
        <ButtonContainer>
            <FormButton style={ styles.button } onPress={ cancelButton.handleClick }>
                <FormButtonText>{ cancelButton.text }</FormButtonText>
            </FormButton>
            <FormButton style={ styles.button } onPress={ confirmButton.handleClick }>
                {
                    confirmButton.text ?
                        <FormButtonText>{ confirmButton.text }</FormButtonText> :

                        isEditPage ?
                            <FormButtonText>Editar reserva</FormButtonText> :
                            <FormButtonText>Fazer reserva</FormButtonText>
                }
            </FormButton>
        </ButtonContainer>
    )
}

const styles = StyleSheet.create({
    button: {
        flexBasis: "48.8%",
    },
})