import React, { SetStateAction, useEffect, useState } from "react";
import DateTimePicker,{DateTimePickerEvent} from '@react-native-community/datetimepicker';
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { useReservationContext } from "../../../contexts/ReservationContext";

import { FormButton, FormButtonText, FormContainer } from "../../general/styles";

interface ReservationFormProps {
    handlePress: Function;
    currentDate?: Date;
    isEditReservation?: boolean;
}

const ReservationForm = ({ handlePress, currentDate, isEditReservation = false }: ReservationFormProps) => {
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
            <View style={styles.buttonContainer}>
                <Button onPress={showDatepicker} title="Data" />
                <Button onPress={showTimepicker} title="Horário" />
                <Button onPress={closePicker} title="Fechar" />
            </View>
            <View style={styles.closeButtonContainer}>
            </View>
            <FormButton onPress={handlePress}>
                {isEditReservation ? <FormButtonText>Editar reserva</FormButtonText> : <FormButtonText>Fazer reserva</FormButtonText>}
            </FormButton>
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
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    closeButtonContainer: {
        alignItems: 'flex-end',
    }
})

export default ReservationForm;
