import { useState } from 'react';
import { Alert, FlatList, Image, ImageSourcePropType, ScrollView, Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '../styles';

import SliderItem from './sliderItem';

import { BannerType } from '../../../types/types';

const banner = require('../../../../assets/images/banner.png');

export default function Slider() {
    const [banners, setBanners] = useState<BannerType[]>([
        {
            id: '0',
            image: banner,
            title: 'O queridinho da casa',
            text: 'Peça agora!',
        },
        {
            id: '1',
            image: banner,
            title: 'O queridinho da casa',
        },
        {
            id: '2',
            image: banner,
            title: 'O queridinho da casa',
            text: 'Peça agora!',
        },
    ]);

    return (
        <View>
            <ScrollView horizontal={true}>
                {banners.map((item, index) => {
                    return <SliderItem key={index} banner={item} />
                })}
            </ScrollView>
        </View>
    );

}