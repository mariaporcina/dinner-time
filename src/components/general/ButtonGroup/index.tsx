import React from "react";

import { StyleSheet, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { Container, FormButton, FormButtonText, ButtonContainer } from "../styles";

export default function ButtonGroup() {
    const isEditReservation = false;

    const handleLinkClick = () => {}

    const handlePress = () => {}

    return (
        <ButtonContainer>
            <FormButton style={styles.button} onPress={handleLinkClick}>
                <FormButtonText>Cancelar</FormButtonText>
            </FormButton>
            <FormButton style={styles.button} onPress={handlePress}>
                {isEditReservation ? <FormButtonText>Editar reserva</FormButtonText> : <FormButtonText>Fazer reserva</FormButtonText>}
            </FormButton>
        </ButtonContainer>
    )
}

const styles = StyleSheet.create({
    button: {
        flexBasis: "48.8%",
    },
})