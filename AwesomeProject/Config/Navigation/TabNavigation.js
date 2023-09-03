import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import MapScreen from '../../Screens/MapScreen';
import Profile from '../../Screens/Profile';
import SMIcon from '../Components/SMIcon';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: "#00509d" },
                tabBarInactiveTintColor: "grey",
                tabBarActiveTintColor: "tomato",
            }}>
                <Tab.Screen name='Home2' component={Home}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({focused, color, size}) => (
                            <SMIcon name='home' color={color} size={size} />
                        ),
                    }} />
                <Tab.Screen name='MapScreen' component={MapScreen}
                    options={{
                        tabBarLabel: "Location",
                        tabBarIcon: ({focused, color, size}) => (
                            <SMIcon name='location-on' color={color} size={size} />
                        ),
                    }} />
                <Tab.Screen name='Profile' component={Profile}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarBadge: 3 ,
                        tabBarIcon: ({focused, color, size}) => (
                            <SMIcon name='person' color={color} size={size} />
                        ),
                    }} />
            </Tab.Navigator>
       
    </>
}

export default TabNavigation;