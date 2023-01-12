import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { PlusButton } from '../../../../Modules/Home/components/Header/components';

import { AppNavigatorParams } from '../../AppNavigatorParams';

export const HeaderRightButton = () => {
  const { navigate } = useNavigation<NavigationProp<AppNavigatorParams>>();

  const handleOnPress = () => {
    navigate('NewDocument');
  };
  return <PlusButton plusButtonName="plus" handleOnPress={handleOnPress} />;
};
