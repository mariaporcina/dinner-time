import React from "react";

import { Title, Container, Subtitle } from "../styles";

interface WelcomeSectionProps {
    title?: string;
    subtitle: string;
}

const WelcomeSection = ({ title='Dinner Time!', subtitle }: WelcomeSectionProps) => {
    return (
        <Container>
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </Container>
    )
}

export default WelcomeSection;