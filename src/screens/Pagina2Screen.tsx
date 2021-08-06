import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation<any>();

    useEffect(() => {
        navigator.setOptions({
            headerBackTitle: 'Atras'
        });
    });

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina2Screen</Text>
            <Button
                title="Ir a página 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    );
};
