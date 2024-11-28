import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ActivitiesScreen from './screens/ActivitiesScreen';
import CarRentalScreen from './screens/CarRentalScreen';
import DestinationsScreen from './screens/DestinationsScreen';
import FlightsScreen from './screens/FlightsScreen';
import HomeandApartScreen from './screens/TouristSpotsScreen';
import HomeScreen from './screens/HomeScreen';
import HotelScreen from './screens/HotelScreen';
import StaysScreen from './screens/StaysScreen';
import TaxiScreen from './screens/TaxiScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Destination" component={DestinationsScreen}/>
        <Stack.Screen name="Stays" component={StaysScreen} />
        <Stack.Screen name="Car Rental" component={CarRentalScreen} />
        <Stack.Screen name="Taxi" component={TaxiScreen} />
        <Stack.Screen name="Flights" component={FlightsScreen} />
        <Stack.Screen name="Activities" component={ActivitiesScreen} />
        <Stack.Screen name="Tourist Spots" component={HomeandApartScreen} />
        <Stack.Screen name="Hotel" component= {HotelScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
