import React, { SetStateAction, useEffect, useState } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import DateTimePicker,{DateTimePickerEvent} from '@react-native-community/datetimepicker';

import { useReservationContext } from "../../../contexts/ReservationContext";

import { Container, FormButton, FormButtonText, FormContainer } from "../../general/styles";

interface ReservationFormProps {
    handlePress: Function;
    currentDate?: Date;
    isEditReservation?: boolean;
}

export default function ReservationForm({ handlePress, currentDate, isEditReservation = false }: ReservationFormProps) {
    const router = useRouter();

    const { date, setDate } = useReservationContext();

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    useEffect(() => {
        if(currentDate) {
            setDate(currentDate);
        }
    }, []);

    const onChange = (event: DateTimePickerEvent, newDate?: Date | undefined) => {
        if(newDate){
            setDate(newDate);
        }
    };

    const showMode = (currentMode: SetStateAction<string>) => {
        if (Platform.OS === 'android') {
            setShow(false);
        } else {
            setShow(true);
        }
        setMode(currentMode);
    }; 

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const closePicker = () => {
        setShow(false);
    }

    const handleLinkClick = () => {
        router.push({
            pathname: '/allReservations'
        });
    }

    return (
        <FormContainer>
            <Text style={styles.textContainer}>
                <Text style={styles.text}>Data selecionada: </Text>
                <Text>{date.toLocaleString()}</Text>
            </Text>
            <View style={styles.datePickerContainer}>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode as any}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
            </View>
            <View style={styles.dateContainer}>
                <Button onPress={showDatepicker} title="Data" />
                <Button onPress={showTimepicker} title="Horário" />
                <Button onPress={closePicker} title="Fechar" />
            </View>
            <View style={styles.closeButtonContainer}>
            </View>
            <Container style={styles.buttonContainer}>
                <FormButton style={styles.button} onPress={handleLinkClick}>
                    <FormButtonText>Cancelar</FormButtonText>
                </FormButton>
                <FormButton style={styles.button} onPress={handlePress}>
                    {isEditReservation ? <FormButtonText>Editar reserva</FormButtonText> : <FormButtonText>Fazer reserva</FormButtonText>}
                </FormButton>
            </Container>
        </FormContainer>
    );
}

const styles = StyleSheet.create({
    datePickerContainer: {
        alignItems: 'flex-end',
    },
    textContainer: {
        marginBottom: 20,
        flex: 1,
        textAlign: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    dateContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 10,
        flexShrink: 0,
        flexGrow: 0,
        flexBasis: 'auto',
    },
    button: {
        flexBasis: "48.8%",
    },
    closeButtonContainer: {
        alignItems: 'flex-end',
    }
})