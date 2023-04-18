import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { Plate } from "../../../general/models";

interface MenuFilterProps {
    data: Plate[];
    filteredData: Plate[];
    setFilteredData: Function;
}

const MenuFilter = ({ data, filteredData, setFilteredData }: MenuFilterProps) => {
    const getSmallestPrice = () => {
        let smallest = data[0];
        data.forEach(plate => {
            smallest = plate.price > smallest.price ? smallest : plate;
        });

        return smallest.price;
    }
    const getBiggestPrice = () => {
        let biggest = data[0];
        data.forEach(plate => {
            biggest = plate.price > biggest.price ? plate : biggest;
        });

        return biggest.price;
    }

    const [filterValue, setFilterValue] = useState([getSmallestPrice(), getBiggestPrice()]);
    
    const onFilterChange = (values: number[]) => {
        setFilterValue(values);
        filterData();
    }

    const filterData = () => {
        const filteredPlates = data.filter(plate => plate.price >= filterValue[0] && plate.price <= filterValue[1]);
        setFilteredData(filteredPlates);
    }

    return (
        <View>
            <View style={styles.textContainer}>
                <Text>{filterValue[0]} </Text>
                <Text>{filterValue[1]}</Text>
            </View>
            <MultiSlider
                values={[filterValue[0], filterValue[1]]}
                sliderLength={getBiggestPrice()}
                onValuesChange={onFilterChange}
                min={getSmallestPrice()}
                max={getBiggestPrice()}
                step={1}
                allowOverlap
                snapped
            />
        </View>
    );
}


const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row"
    }
});

export default MenuFilter;