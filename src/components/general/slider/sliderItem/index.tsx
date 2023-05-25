import { useState } from 'react';
import { Alert, FlatList, Image, ImageSourcePropType, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const banner = require('../../../../assets/images/banner.png');

interface ImageType {
    id: string;
    image: ImageSourcePropType;
}

const Slider = () => {
    const [images, setImages] = useState<ImageType[]>([
        {id: '0', image: banner},
        {id: '1', image: banner},
        {id: '2', image: banner}
    ]);

    return (
        <SafeAreaView>
            <ScrollView horizontal={true}>
                {images.map((item, index) => {
                    return <Image key={index} source={item.image}/>
                })}
            </ScrollView>
        </SafeAreaView>
    );

}

export default Slider;