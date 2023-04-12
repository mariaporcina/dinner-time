import React, { SetStateAction, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Platform, StyleSheet, Text } from "react-native";

import { FormButton, FormButtonText, FormContainer } from "../../general/styles";

interface ReservationFormProps {
    handlePress: Function
}

const ReservationForm = ({ handlePress }: ReservationFormProps) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: Event, selectedDate: Date) => {
        const currentDate = selectedDate;
        // setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: SetStateAction<string>) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
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
            <Button onPress={closePicker} title="Close" />
            <Button onPress={showDatepicker} title="Selecionar Data" />
            <Button onPress={showTimepicker} title="Selecionar Horário" />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
            <FormButton onPress={handlePress}>
                <FormButtonText>Fazer reserva</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        marginBottom: 20,
        textAlign: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default ReservationForm;
