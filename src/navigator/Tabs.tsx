import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTapNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName: string = 'alert-outline';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'square-outline';
                            break;
                        case 'Tab2Screen':
                            iconName = 'layers-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'layers-outline';
                        break;
                    }
                    return <Icon name={ iconName } size={ size } color={ color } />;
                }
            })}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
        >
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
};


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = 'alert-outline';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'square-outline';
                            break;
                        case 'Tab2Screen':
                            iconName = 'layers-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'layers-outline';
                        break;
                    }
                    return <Icon name={ iconName } size={ 15 } color={ color } />;
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
};
