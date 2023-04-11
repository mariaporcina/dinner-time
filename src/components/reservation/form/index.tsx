import React from "react";

import { FormButton, FormButtonText, FormContainer, Input } from "../../general/styles";

const ReservationForm = () => {
    return (
        <FormContainer>
            <Input
                placeholder="Data e Hora" />
            <FormButton>
                <FormButtonText>Fazer reserva</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}

export default ReservationForm;
