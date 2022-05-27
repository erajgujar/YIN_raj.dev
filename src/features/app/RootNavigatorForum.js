import React from 'react';
import { View, Image, Text } from 'react-native'
import { ForumDashboard } from '../Other Components/ForumDashboard';
import ForumType from './ForumType';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const RootNavigatorForum = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Forum" component={ForumType} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={ForumDashboard} options={{ headerShown: true }} />              
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigatorForum;


