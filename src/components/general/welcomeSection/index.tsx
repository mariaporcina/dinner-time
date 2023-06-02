import React from "react";

import { Title, Container, Subtitle } from "../styles";

interface WelcomeSectionProps {
    title?: string;
    subtitle?: string;
    customStyle?: {
        flexGrow: number;
        flexShrink: number;
        flexBasis: string;
    }
}

export default function WelcomeSection({ title='Dinner Time!', subtitle, customStyle }: WelcomeSectionProps) {
    return (
        <Container style={customStyle}>
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </Container>
    )
}