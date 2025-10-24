import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../screens/TelaInicial';
import TelaDetalhes from '../screens/TelaDetalhes';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={TelaInicial} options={{ title: 'Página Inicial' }} />
                <Stack.Screen name="Detalhes" component={TelaDetalhes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
