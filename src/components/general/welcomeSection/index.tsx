import React from "react";

import { Title, Container, Subtitle } from "../styles";

const WelcomeSection = () => {
    return (
        <Container>
            <Title>Bem vindo!{"\n"}It's Dinner Time!</Title>
            <Subtitle>Cadastre-se no app para iniciar.</Subtitle>
        </Container>
    )
}

export default WelcomeSection;