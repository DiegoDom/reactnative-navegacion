import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
                <Icon name="rocket-outline" size={80} color={ colores.primary } />
                <Icon name="basketball-outline" size={80} color={ colores.primary } />
                <Icon name="star-outline" size={80} color={ colores.primary } />
                <Icon name="watch-outline" size={80} color={ colores.primary } />
                <Icon name="settings-outline" size={80} color={ colores.primary } />
                <Icon name="flame-outline" size={80} color={ colores.primary } />
                <Icon name="cut-outline" size={80} color={ colores.primary } />
                <Icon name="beer-outline" size={80} color={ colores.primary } />
            </Text>
        </View>
    );
};
