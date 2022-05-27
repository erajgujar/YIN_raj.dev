import React from 'react';
import { View, Image, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IssueDetails from './IssueDetails';
import CheckUpdates from './CheckUpdates';


const Stack = createNativeStackNavigator();



const RootNavigatorIssues = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="IssueDetails" component={IssueDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Updates" component={CheckUpdates} options={{ headerShown: true }} />               
            </Stack.Navigator>
        </NavigationContainer>


    )
}
export default RootNavigatorIssues;


