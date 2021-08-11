import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect');
    });

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10
        }}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName="rocket-outline"/>
                <TouchableIcon iconName="basketball-outline"/>
                <TouchableIcon iconName="star-outline"/>
                <TouchableIcon iconName="watch-outline"/>
                <TouchableIcon iconName="settings-outline"/>
                <TouchableIcon iconName="flame-outline"/>
                <TouchableIcon iconName="cut-outline"/>
                <TouchableIcon iconName="beer-outline"/>
            </Text>
        </View>
    );
};
