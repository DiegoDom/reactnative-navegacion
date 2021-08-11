import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

/* interface RouteParams {
    id: number;
    nombre: string;
} */

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouteParams;

    const { changeUserName, authState: { isLoggedIn } } = useContext(AuthContext);

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        });
    });

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
            { isLoggedIn && <Button title="Elegir usuario" onPress={() => changeUserName(params.nombre)} /> }
        </View>
    );
};
