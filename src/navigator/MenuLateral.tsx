import React from 'react';
import { useWindowDimensions, Image, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

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
            <Drawer.Screen name="Tabs" component={Tabs} />
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
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.menuItem} >
                        <Icon name="compass-outline" size={20} color="black" /> Navegación
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.menuButton }
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuItem}>
                        <Icon name="settings-outline" size={20} color="black" /> Ajustes
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
