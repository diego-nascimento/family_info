import React from 'react';
import { View } from 'react-native';
import Styles from './styles';

interface Props {
  children: React.ReactNode;
}

export const HeaderContainer = ({ children }: Props) => {
  return <View style={Styles.Wrapper}>{children}</View>;
};
