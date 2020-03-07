import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Home from './components/home';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Connexion' component={Login} />
                <Stack.Screen name='Accueil' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
