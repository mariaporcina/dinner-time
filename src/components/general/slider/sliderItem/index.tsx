import { useState } from 'react';
import { Alert, FlatList, Image, ImageSourcePropType, ScrollView, Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { BannerType } from '../../../../types/types';

interface SliderProps {
    banner: BannerType;
}

export default function SliderItem({ banner }: SliderProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={banner.image}/>
            <View style={styles.contentBackground}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{ banner.title }</Text>
                    <Text style={styles.text}>{ banner.text }</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    contentBackground: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff'
    },
    image: {
        height: 130,
    },
});