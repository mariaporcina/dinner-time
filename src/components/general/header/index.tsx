import { Redirect } from "expo-router";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../constants";
import { Container } from '../styles';

import useAuth from "../../../../hooks/useAuth";
import { useAllReservationsContext } from "../../../contexts/ReservationsContext";

interface HeaderProps {
    page: string;
    title?: string;
}

const Header = ({ page, title }: HeaderProps) => {
    const { user, loading, logout } = useAuth();
    const { refreshData } = useAllReservationsContext();

    const handleClick = async () => {
        try {
            await logout();
            await refreshData();
        } catch (error: any) {
            console.error('Error', error);
        }
    }

    if(!loading){
        if(page !== 'login' && page !== 'register' && user === null) {
            return <Redirect href="/" />
        }
    }

    return (
        <View style={ styles.view }>
            <Container style={styles.container}>
                { (page === 'login' || page === 'register') && (
                    <Text style={ styles.text }>Dinner Time</Text> 
                )}
                <Text style={ styles.text }>{!!title ? title : ''}</Text>
                { page !== 'login' && page !== 'register' && (
                    <TouchableOpacity onPress={ handleClick }>
                        <Ionicons name="log-out-outline" size={24} color="white" />
                    </TouchableOpacity>
                )}
            </Container>
        </View> 
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.darkRed,
        paddingTop: 45,
        height: 90,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#edf2f4'
    },
    link: {
        textAlign: 'center',
        color: 'white',
        textDecorationLine: 'underline'
    }
});

export default Header;