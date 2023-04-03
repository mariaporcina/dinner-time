import React from "react";
import { View, Text } from "react-native";

import { Title } from "../styles";

const WelcomeSection = () => {
    return (
        <View>
            <Title>Bem vindo! It's Dinner Time!</Title>
            <Text>Cadastre-se no app para iniciar.</Text>
        </View>
    )
}

export default WelcomeSection;