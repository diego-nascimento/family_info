import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppNavigatorParams } from './AppNavigatorParams';

import { Home } from '../../Modules/Home';

import { usePerson } from '../../shared/Contexts';
import { PersonDetail } from '../../Modules/PersonDetail';
import { HeaderRightButton } from './Components';
import { NewDocument } from '../../Modules/NewDocument';

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigation = () => {
  const { selectedPerson } = usePerson();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={PersonDetail}
          options={{
            headerShown: true,
            title: selectedPerson?.name,
            headerTitleStyle: {
              fontSize: 16,
            },
            headerRight: () => <HeaderRightButton />,
          }}
          initialParams={{ person: selectedPerson }}
        />
        <Stack.Screen name="NewDocument" component={NewDocument} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
