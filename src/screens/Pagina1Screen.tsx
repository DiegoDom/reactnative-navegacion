import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>
            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />

            <Text style={ styles.subtitulo }>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Dominic'
                    })}
                >
                    <Icon name="person-outline" size={20} color="white" />
                    <Text style={styles.botonGrandeText}>Dominic</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Taylor'
                    })}
                >
                    <Icon name="person-outline" size={20} color="white" />
                    <Text style={ styles.botonGrandeText }>Taylor</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
