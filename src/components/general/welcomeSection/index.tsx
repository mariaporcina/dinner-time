import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { Title, Container, Subtitle } from "../styles";
const logo = require('../../../../assets/images/icon.png');

interface WelcomeSectionProps {
    title?: string;
    subtitle?: string;
    isLogin?: boolean;
    customStyle?: {
        flexGrow: number;
        flexShrink: number;
        flexBasis: string;
    }
}

export default function WelcomeSection({ title='Dinner Time!', subtitle, isLogin = false, customStyle }: WelcomeSectionProps) {
    return (
        <Container style={customStyle}>
            { !isLogin && <Title>{ title }</Title> }

            {isLogin && <View style={styles.imageContainer}>
                <Image source={ logo } style={styles.image} />
            </View> }
            <Subtitle>{ subtitle }</Subtitle>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center"
    }
});