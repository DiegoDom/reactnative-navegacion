import React from 'react';
import { useWindowDimensions, Image, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={ (props) => <MenuInterno {...props} /> }
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View style={ styles.avatarContainer }>
                <Image
                    style={ styles.avatar }
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' }} />
            </View>
            <View style={ styles.menuContainer }>
                <TouchableOpacity
                    style={ styles.menuButton }
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={ styles.menuItem } >Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.menuButton }
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={ styles.menuItem }>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
