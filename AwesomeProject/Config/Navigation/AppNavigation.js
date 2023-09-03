import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../../Screens/Products';
import ProductDetails from '../../Screens/ProductDetails';
import styles from '../../styles';
import Login from '../../Screens/Login'
// import Profile from '../../Screens/Profile';
import Home from '../../Screens/Home';
import SplashScreen from '../../Screens/SplashScreen';
// import MapScreen from '../../Screens/MapScreen';
import SignUp from '../../Screens/SignUp';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    const [showSplashscreen, setShowSplashscreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowSplashscreen(false)
        }, 4000)
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {showSplashscreen ? (
                    <Stack.Screen options={{ headerShown: false }}
                        name="SplashScreen" component={SplashScreen} />)
                    : null}
                <Stack.Screen options={{
                    headerShown: false
                }} name='Login' component={Login} />
                <Stack.Screen options={{
                    headerShown: false
                }} name='SignUp' component={SignUp} />
                <Stack.Screen name="Home" component={TabNavigation} options={{headerShown: false}} />

                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen options={{
                    title: 'Product Detail', headerStyle: {
                        backgroundColor: styles._dark,
                    },
                    headerTintColor: '#fff',
                }} name="ProductDetails" component={ProductDetails} />
            
                {/* <Stack.Screen name='Profile' component={Profile} /> */}
                {/* <Stack.Screen name='MapScreen' component={MapScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;