import React, { SetStateAction, useEffect, useState } from "react";
import { Button, Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { useReservationContext } from "../../../contexts/ReservationContext";
import ButtonGroup from "../../general/ButtonGroup";

import { FormContainer } from "../../general/styles";

interface ReservationFormProps {
    handleConfirmButton: () => void;
    currentDate?: Date;
    isEditReservation?: boolean;
}

export default function ReservationForm({ handleConfirmButton, currentDate, isEditReservation = false }: ReservationFormProps) {
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

    const showModeAndroid = (currentMode: SetStateAction<string>) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode as any,
            is24Hour: true,
        });
    };

    const showMode = (currentMode: SetStateAction<string>) => {
        if (Platform.OS === 'android') {
            showModeAndroid(currentMode);
        } else {
            setShow(true);
            setMode(currentMode);
        }
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

    const handleCancelButton = () => {
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
                        value={date}
                        mode={mode as any}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
            </View>

            <View style={styles.dateContainer}>
                <TouchableOpacity onPress={showDatepicker}>
                    <Text>Data</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimepicker}>
                    <Text>Horário</Text>
                </TouchableOpacity>
                { Platform.OS === 'ios' && <TouchableOpacity onPress={closePicker}>
                    <Text>Fechar</Text>
                </TouchableOpacity> }
            </View>

            <ButtonGroup 
                cancelButton={{
                    text: 'Cancelar',
                    handleClick: handleCancelButton
                }}
                confirmButton={{
                    handleClick: handleConfirmButton
                }}
                isEditPage={isEditReservation}
            />
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
})